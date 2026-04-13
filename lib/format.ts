import { SensorStatus } from '@/types/sensor';

export function formatTimestamp(timestamp: string): string {
  const safeDate = new Date(timestamp.replace(' ', 'T'));
  if (Number.isNaN(safeDate.getTime())) {
    return timestamp;
  }

  return safeDate.toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export function statusClasses(status: SensorStatus): string {
  if (status === 'KERING') {
    return 'bg-amber-100 text-amber-700 ring-amber-200';
  }

  if (status === 'LEMBAB') {
    return 'bg-emerald-100 text-emerald-700 ring-emerald-200';
  }

  return 'bg-blue-100 text-blue-700 ring-blue-200';
}
