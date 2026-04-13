import { SensorReading } from '@/types/sensor';

export const mockSensorData: SensorReading[] = [
  { waktu: '2026-04-13 10:00:00', adc: 2150, kelembaban: 48, status: 'LEMBAB' },
  { waktu: '2026-04-13 10:01:00', adc: 2100, kelembaban: 50, status: 'LEMBAB' },
  { waktu: '2026-04-13 10:02:00', adc: 2080, kelembaban: 52, status: 'LEMBAB' },
  { waktu: '2026-04-13 10:03:00', adc: 2030, kelembaban: 55, status: 'BASAH' },
  { waktu: '2026-04-13 10:04:00', adc: 2200, kelembaban: 44, status: 'KERING' },
  { waktu: '2026-04-13 10:05:00', adc: 2140, kelembaban: 49, status: 'LEMBAB' }
];
