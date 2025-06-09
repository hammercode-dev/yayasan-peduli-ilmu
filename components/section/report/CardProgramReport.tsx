import { Users, TrendingUp, FileText, Download } from 'lucide-react';

export type ProgramReport = {
  program: string;
  status: 'Aktif' | 'Nonaktif';
  santri: number;
  kelulusan: string;
  kepuasan: string;
};

const CardProgramReport = ({ report }: { report: ProgramReport }) => {
  return (
    <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border group">
      <div className="p-6 border-b border-border">
        <h3 className="text-accent-800 text-xl font-bold">{report.program}</h3>
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${
            report.status === 'Aktif'
              ? 'bg-green-100 text-green-800'
              : 'bg-muted text-muted-foreground'
          }`}
        >
          {report.status}
        </span>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-muted p-4 rounded-lg group-hover:bg-primary-50 transition-colors duration-200">
            <Users className="h-6 w-6 text-primary-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent-800">{report.santri}</p>
            <p className="text-sm text-muted-foreground">Santri Aktif</p>
          </div>

          <div className="bg-muted p-4 rounded-lg group-hover:bg-secondary-50 transition-colors duration-200">
            <TrendingUp className="h-6 w-6 text-secondary-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent-800">{report.kelulusan}</p>
            <p className="text-sm text-muted-foreground">Tingkat Kelulusan</p>
          </div>

          <div className="bg-muted p-4 rounded-lg group-hover:bg-accent-50 transition-colors duration-200">
            <FileText className="h-6 w-6 text-accent-800 mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent-800">{report.kepuasan}</p>
            <p className="text-sm text-muted-foreground">Kepuasan</p>
          </div>
        </div>

        <button className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
          <Download className="h-4 w-4 mr-2" />
          Unduh Laporan Detail
        </button>
      </div>
    </div>
  );
};

export default CardProgramReport;
