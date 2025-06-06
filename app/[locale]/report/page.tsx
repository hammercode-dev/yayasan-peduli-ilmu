import {
  Download,
  FileText,
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
} from 'lucide-react';

export default function LaporanPage() {
  const financialReports = [
    {
      period: 'Januari 2024',
      type: 'Bulanan',
      status: 'Tersedia',
      pemasukan: 125000000,
      pengeluaran: 98000000,
      saldo: 27000000,
    },
    {
      period: 'Februari 2024',
      type: 'Bulanan',
      status: 'Tersedia',
      pemasukan: 142000000,
      pengeluaran: 115000000,
      saldo: 27000000,
    },
    {
      period: 'Maret 2024',
      type: 'Bulanan',
      status: 'Tersedia',
      pemasukan: 138000000,
      pengeluaran: 108000000,
      saldo: 30000000,
    },
    {
      period: 'Q1 2024',
      type: 'Triwulan',
      status: 'Tersedia',
      pemasukan: 405000000,
      pengeluaran: 321000000,
      saldo: 84000000,
    },
    {
      period: '2023',
      type: 'Tahunan',
      status: 'Tersedia',
      pemasukan: 1650000000,
      pengeluaran: 1420000000,
      saldo: 230000000,
    },
  ];

  const programReports = [
    {
      program: 'Pondok Pesantren Darul Hadits',
      santri: 145,
      kelulusan: '98%',
      kepuasan: '4.8/5',
      status: 'Aktif',
    },
    {
      program: "Komunitas Ta'shil Ilmi",
      santri: 78,
      kelulusan: '95%',
      kepuasan: '4.7/5',
      status: 'Aktif',
    },
  ];

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

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
            <div className="bg-card rounded-lg shadow-lg border-l-4 border-l-primary-500 border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Pemasukan 2024
                    </p>
                    <p className="text-2xl font-bold text-accent-800">Rp 405M</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary-500" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-lg border-l-4 border-l-secondary-600 border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Pengeluaran 2024
                    </p>
                    <p className="text-2xl font-bold text-accent-800">Rp 321M</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-secondary-600" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-lg border-l-4 border-l-accent-800 border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Saldo Akhir</p>
                    <p className="text-2xl font-bold text-accent-800">Rp 84M</p>
                  </div>
                  <FileText className="h-8 w-8 text-accent-800" />
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-lg border-l-4 border-l-primary-500 border border-border hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Santri</p>
                    <p className="text-2xl font-bold text-accent-800">223</p>
                  </div>
                  <Users className="h-8 w-8 text-primary-500" />
                </div>
              </div>
            </div>
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
            {financialReports.map((report, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
              >
                <div className="p-6">
                  <div className="grid md:grid-cols-6 gap-4 items-center">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-primary-500 mr-3" />
                      <div>
                        <p className="font-semibold text-accent-800">
                          {report.period}
                        </p>
                        <span className="inline-block mt-1 px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
                          {report.type}
                        </span>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Pemasukan</p>
                      <p className="font-semibold text-green-600">
                        {formatRupiah(report.pemasukan)}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Pengeluaran</p>
                      <p className="font-semibold text-red-600">
                        {formatRupiah(report.pengeluaran)}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Saldo</p>
                      <p className="font-semibold text-accent-800">
                        {formatRupiah(report.saldo)}
                      </p>
                    </div>

                    <div className="text-center">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          report.status === 'Tersedia'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>

                    <div className="text-center">
                      <button className="inline-flex items-center px-3 py-2 bg-accent-800 hover:bg-accent-900 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                        <Download className="h-4 w-4 mr-2" />
                        Unduh
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
            {programReports.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border group"
              >
                <div className="p-6 border-b border-border">
                  <h3 className="text-accent-800 text-xl font-bold">
                    {program.program}
                  </h3>
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
                      program.status === 'Aktif'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {program.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-muted p-4 rounded-lg group-hover:bg-primary-50 transition-colors duration-200">
                      <Users className="h-6 w-6 text-primary-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent-800">
                        {program.santri}
                      </p>
                      <p className="text-sm text-muted-foreground">Santri Aktif</p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg group-hover:bg-secondary-50 transition-colors duration-200">
                      <TrendingUp className="h-6 w-6 text-secondary-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent-800">
                        {program.kelulusan}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Tingkat Kelulusan
                      </p>
                    </div>

                    <div className="bg-muted p-4 rounded-lg group-hover:bg-accent-50 transition-colors duration-200">
                      <FileText className="h-6 w-6 text-accent-800 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-accent-800">
                        {program.kepuasan}
                      </p>
                      <p className="text-sm text-muted-foreground">Kepuasan</p>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Unduh Laporan Detail
                  </button>
                </div>
              </div>
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
