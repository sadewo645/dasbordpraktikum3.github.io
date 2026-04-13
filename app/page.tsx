'use client';

import { motion } from 'framer-motion';
import { Activity, Droplets, Gauge, Timer } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { AdcChart } from '@/components/adc-chart';
import { DashboardHeader } from '@/components/dashboard-header';
import { HistoryTable } from '@/components/history-table';
import { KpiCard } from '@/components/kpi-card';
import { MoistureChart } from '@/components/moisture-chart';
import { StatusBadge } from '@/components/status-badge';
import { fetchSensorData, REFRESH_INTERVAL_MS } from '@/lib/api';
import { formatTimestamp } from '@/lib/format';
import { SensorReading } from '@/types/sensor';

export default function HomePage() {
  const [data, setData] = useState<SensorReading[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = useCallback(async () => {
    try {
      setIsRefreshing(true);
      const result = await fetchSensorData();
      setData(result.data);
      setErrorMessage(result.warning ?? null);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadData();

    const intervalId = setInterval(() => {
      void loadData();
    }, REFRESH_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [loadData]);

  const latest = useMemo(() => data.at(-1), [data]);
  const recentData = useMemo(() => data.slice(-10).reverse(), [data]);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl p-5 md:p-8">
        <section className="card">
          <p className="text-sm text-slate-600">Memuat data sensor...</p>
        </section>
      </main>
    );
  }

  if (!latest) {
    return (
      <main className="mx-auto max-w-7xl p-5 md:p-8">
        <section className="card">
          <h1 className="text-xl font-semibold">Data tidak tersedia</h1>
          <p className="mt-2 text-sm text-slate-600">
            Belum ada data yang dapat ditampilkan. Periksa endpoint atau sheet Anda.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-6 p-5 md:p-8">
      <DashboardHeader isRefreshing={isRefreshing} onManualRefresh={() => void loadData()} />

      {errorMessage ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card border-amber-200 bg-amber-50 text-amber-800">
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="Kelembaban Terkini" value={`${latest.kelembaban}%`} subtitle="Nilai persen" icon={Droplets} delay={0.05} />
        <KpiCard title="ADC Terkini" value={`${latest.adc}`} subtitle="Raw ADC" icon={Gauge} delay={0.1} />
        <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.15 }} className="card">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-600">Status Terkini</p>
            <Activity className="h-5 w-5 text-soil-700" />
          </div>
          <StatusBadge status={latest.status} />
        </motion.article>
        <KpiCard title="Pembaruan Terakhir" value={formatTimestamp(latest.waktu)} subtitle="Waktu lokal" icon={Timer} delay={0.2} />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <MoistureChart data={data} />
        <AdcChart data={data} />
      </section>

      <HistoryTable data={recentData} />
    </main>
  );
}
