import { formatTimestamp } from '@/lib/format';
import { SensorReading } from '@/types/sensor';

import { StatusBadge } from '@/components/status-badge';

type HistoryTableProps = {
  data: SensorReading[];
};

export function HistoryTable({ data }: HistoryTableProps) {
  return (
    <section className="card overflow-hidden">
      <h2 className="mb-4 text-lg font-semibold">Riwayat Data Terbaru</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="px-3 py-2 font-medium">Waktu</th>
              <th className="px-3 py-2 font-medium">Kelembaban</th>
              <th className="px-3 py-2 font-medium">ADC</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, index) => (
              <tr key={`${item.waktu}-${index}`} className="text-slate-700">
                <td className="px-3 py-2">{formatTimestamp(item.waktu)}</td>
                <td className="px-3 py-2">{item.kelembaban}%</td>
                <td className="px-3 py-2">{item.adc}</td>
                <td className="px-3 py-2">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
