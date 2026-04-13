import { statusClasses } from '@/lib/format';
import { SensorStatus } from '@/types/sensor';

type StatusBadgeProps = {
  status: SensorStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses(status)}`}>
      {status}
    </span>
  );
}
