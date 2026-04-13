import { mockSensorData } from '@/lib/mock-data';
import { SENSOR_STATUSES, SensorApiItem, SensorReading, SensorStatus } from '@/types/sensor';

const REFRESH_INTERVAL_MS = 30_000;

function asNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return null;
}

function asStatus(value: unknown): SensorStatus | null {
  if (typeof value !== 'string') {
    return null;
  }

  const normalized = value.toUpperCase();
  return SENSOR_STATUSES.includes(normalized as SensorStatus)
    ? (normalized as SensorStatus)
    : null;
}

function parseItem(item: SensorApiItem): SensorReading | null {
  const waktu = typeof item.waktu === 'string' ? item.waktu : null;
  const adc = asNumber(item.adc);
  const kelembaban = asNumber(item.kelembaban);
  const status = asStatus(item.status);

  if (!waktu || adc === null || kelembaban === null || !status) {
    return null;
  }

  return { waktu, adc, kelembaban, status };
}

export type SensorFetchResult = {
  data: SensorReading[];
  usedFallback: boolean;
  warning?: string;
};

export async function fetchSensorData(): Promise<SensorFetchResult> {
  const endpoint = process.env.NEXT_PUBLIC_SHEET_API_URL;

  if (!endpoint) {
    return {
      data: mockSensorData,
      usedFallback: true,
      warning: 'NEXT_PUBLIC_SHEET_API_URL belum diatur. Menampilkan data mock.'
    };
  }

  try {
    const response = await fetch(endpoint, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      throw new Error(`Request gagal (${response.status})`);
    }

    const payload: unknown = await response.json();
    if (!Array.isArray(payload)) {
      throw new Error('Format API tidak valid: expected array');
    }

    const parsed = payload
      .map((item) => parseItem(item as SensorApiItem))
      .filter((item): item is SensorReading => item !== null);

    if (parsed.length === 0) {
      return {
        data: mockSensorData,
        usedFallback: true,
        warning: 'Data endpoint kosong/tidak valid. Menampilkan data mock.'
      };
    }

    return { data: parsed, usedFallback: false };
  } catch (error) {
    return {
      data: mockSensorData,
      usedFallback: true,
      warning:
        error instanceof Error
          ? `${error.message}. Menampilkan data mock.`
          : 'Gagal mengambil data. Menampilkan data mock.'
    };
  }
}

export { REFRESH_INTERVAL_MS };
