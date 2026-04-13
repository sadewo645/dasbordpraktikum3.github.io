'use client';

import { motion } from 'framer-motion';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { SensorReading } from '@/types/sensor';

type MoistureChartProps = {
  data: SensorReading[];
};

export function MoistureChart({ data }: MoistureChartProps) {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="card">
      <h2 className="mb-4 text-lg font-semibold">Grafik Kelembaban</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="moistureFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4E8A62" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#4E8A62" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#d5e3d7" />
            <XAxis dataKey="waktu" tick={{ fontSize: 11 }} minTickGap={16} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} unit="%" />
            <Tooltip />
            <Area type="monotone" dataKey="kelembaban" stroke="#386150" fill="url(#moistureFill)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
