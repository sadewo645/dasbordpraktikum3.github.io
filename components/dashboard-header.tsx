'use client';

import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

import { HeroIllustration } from '@/components/hero-illustration';

type DashboardHeaderProps = {
  isRefreshing: boolean;
  onManualRefresh: () => void;
};

export function DashboardHeader({ isRefreshing, onManualRefresh }: DashboardHeaderProps) {
  return (
    <section className="card overflow-hidden bg-gradient-to-br from-white to-soil-100">
      <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Soil Moisture Monitoring</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
            Pantau kelembaban tanah, nilai ADC, dan status sensor ESP32 secara real-time dari endpoint Google Sheets.
          </p>
          <button
            onClick={onManualRefresh}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-soil-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-soil-900"
            type="button"
            disabled={isRefreshing}
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh data
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="justify-self-center"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
