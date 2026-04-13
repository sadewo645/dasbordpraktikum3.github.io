# Soil Moisture Monitoring Dashboard

Dashboard Next.js App Router untuk monitoring data kelembaban tanah dari ESP32 melalui Google Apps Script + Google Sheets.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- Framer Motion
- lucide-react

## Struktur Proyek

```bash
app/
components/
lib/
types/
```

## Menjalankan Lokal

1. Install dependencies:
   ```bash
   npm install
   ```
2. Buat file environment:
   ```bash
   cp .env.example .env.local
   ```
3. Isi endpoint Apps Script pada `.env.local`:
   ```env
   NEXT_PUBLIC_SHEET_API_URL=https://script.google.com/macros/s/your-script-id/exec
   ```
4. Jalankan dev server:
   ```bash
   npm run dev
   ```

## Build Production

```bash
npm run build
```

## Catatan Reliabilitas

- Jika `NEXT_PUBLIC_SHEET_API_URL` tidak diisi atau endpoint gagal, aplikasi otomatis memakai mock data agar UI tetap tampil.
- Parsing response dilakukan secara type-safe untuk menghindari crash saat format data berubah.
- Auto-refresh berjalan tiap 30 detik.

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Import project di Vercel.
3. Atur Environment Variable:
   - `NEXT_PUBLIC_SHEET_API_URL`
4. Deploy.

Aplikasi tetap dapat render meskipun env belum diatur (menggunakan fallback mock data).
