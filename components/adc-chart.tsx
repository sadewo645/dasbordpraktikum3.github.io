'use client';

import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { SensorReading } from '@/types/sensor';

type AdcChartProps = {
  data: SensorReading[];
};

export function AdcChart({ data }: AdcChartProps) {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }} className="card">
      <h2 className="mb-4 text-lg font-semibold">Grafik ADC</h2>
      <div className="h-72 w-full">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dbe7dd" />
            <XAxis dataKey="waktu" tick={{ fontSize: 11 }} minTickGap={16} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="adc" fill="#6b8f71" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.section>
  );
}
