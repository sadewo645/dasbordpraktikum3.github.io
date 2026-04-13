'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

type KpiCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
  subtitle?: string;
  delay?: number;
};

export function KpiCard({ title, value, icon: Icon, subtitle, delay = 0 }: KpiCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="card"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        <Icon className="h-5 w-5 text-soil-700" />
      </div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
    </motion.article>
  );
}
