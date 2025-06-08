import { formatRupiah } from '@/lib/format';
import { Calendar, Download } from 'lucide-react';

export type FinancialReport = {
  period: string;
  type: string;
  pemasukan: number;
  pengeluaran: number;
  saldo: number;
  status: 'Tersedia' | 'Belum Tersedia';
};

const CardFinancialReport = ({ report }: { report: FinancialReport }) => {
  return (
    <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
      <div className="p-6">
        <div className="grid md:grid-cols-6 gap-4 items-center">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-primary-500 mr-3" />
            <div>
              <p className="font-semibold text-accent-800">{report.period}</p>
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
  );
};

export default CardFinancialReport;
