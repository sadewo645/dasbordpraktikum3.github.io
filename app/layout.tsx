import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Soil Moisture Dashboard',
  description: 'Monitoring kelembaban tanah dari ESP32 dan Google Sheets.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
