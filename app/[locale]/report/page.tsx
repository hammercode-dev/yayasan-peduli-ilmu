import CardFinancialReport from '@/components/section/report/CardFinancialReport';
import CardProgramReport from '@/components/section/report/CardProgramReport';
import CardStatistic from '@/components/section/report/CardStatistic';
import CardTransparencyReport from '@/components/section/report/CardTransparencyReport';
import {
  FINANCIAL_REPORTS,
  PROGRAM_REPORTS,
  STATISTIC_REPORTS,
  TRANSPARENCY_REPORTS,
} from '@/constants/reports';
import { FileText, TrendingUp, Users } from 'lucide-react';

export default function LaporanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-brand text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Laporan Yayasan</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Transparansi dan akuntabilitas dalam pengelolaan yayasan
            </p>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {STATISTIC_REPORTS.map((item) => (
              <CardStatistic key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Laporan Keuangan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Laporan keuangan yayasan yang dapat diunduh dan diakses secara
              transparan
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {FINANCIAL_REPORTS.map((report, index) => (
              <CardFinancialReport key={index} report={report} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Reports */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Laporan Program
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Evaluasi dan pencapaian program-program pendidikan yayasan
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROGRAM_REPORTS.map((report, index) => (
              <CardProgramReport key={index} report={report} />
            ))}
          </div>
        </div>
      </section>

      {/* Audit Information */}
      <section className="py-16 bg-accent-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Audit & Transparansi
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Komitmen kami terhadap transparansi dan akuntabilitas pengelolaan
              yayasan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TRANSPARENCY_REPORTS.map((item, index) => (
              <CardTransparencyReport key={index} {...item} />
            ))}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Audit Eksternal</h3>
                <p className="text-gray-300 mb-4">
                  Laporan keuangan diaudit oleh Kantor Akuntan Publik terdaftar
                </p>
                <p className="text-primary-200 font-semibold">
                  Terakhir: Desember 2023
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="p-6 text-center">
                <Users className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Dewan Pengawas</h3>
                <p className="text-gray-300 mb-4">
                  Pengawasan internal oleh dewan pengawas yang independen
                </p>
                <p className="text-primary-200 font-semibold">5 Anggota Aktif</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Publikasi Rutin</h3>
                <p className="text-gray-300 mb-4">
                  Laporan keuangan dipublikasikan setiap bulan di website
                </p>
                <p className="text-primary-200 font-semibold">Update Bulanan</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-xl font-bold mb-4">Hubungi Tim Keuangan</h3>
              <p className="text-gray-300 mb-4">
                Untuk pertanyaan terkait laporan keuangan atau audit
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Email</p>
                  <p>keuangan@yayasanpeduliilmu.org</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Telepon</p>
                  <p>+62 812-3456-7890 (ext. 2)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
