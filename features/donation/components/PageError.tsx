import React from 'react';

import { Link } from '@/i18n/navigation';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

function PageError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12">
      <div className="max-w-2xl w-full bg-card border border-border shadow-sm rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-red-100 text-red-600 flex items-center justify-center rounded-full">
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-4">
          Terjadi Kesalahan
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed mb-6">
          Maaf, kami tidak dapat menampilkan detail program donasi saat ini. Silakan
          coba beberapa saat lagi atau kembali ke halaman utama.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 btn-primary px-6 py-3 text-base font-medium"
        >
          <ArrowLeft className="h-5 w-5" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default PageError;
