export const SENSOR_STATUSES = ['KERING', 'LEMBAB', 'BASAH'] as const;

export type SensorStatus = (typeof SENSOR_STATUSES)[number];

export type SensorReading = {
  waktu: string;
  adc: number;
  kelembaban: number;
  status: SensorStatus;
};

export type SensorApiItem = {
  waktu?: unknown;
  adc?: unknown;
  kelembaban?: unknown;
  status?: unknown;
};
