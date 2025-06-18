import { DollarSign, FileText, TrendingUp, Users } from 'lucide-react';
import { FinancialReport } from './components/CardFinancialReport';
import { ProgramReport } from './components/CardProgramReport';
import { TransparencyReport } from './components/CardTransparencyReport';

export const STATISTIC_REPORTS = (t: (key: string) => string) => [
  {
    id: 1,
    title: `${t('statistic-card.card-1')} 2024`,
    value: 2000000,
    icon: TrendingUp,
    borderColor: 'primary',
  },
  {
    id: 2,
    title: `${t('statistic-card.card-2')} 2024`,
    value: 5200000,
    icon: DollarSign,
    borderColor: 'secondary',
  },
  {
    id: 3,
    title: t('statistic-card.card-3'),
    value: 87005000,
    icon: FileText,
    borderColor: 'accent',
  },
  {
    id: 4,
    title: t('statistic-card.card-4'),
    value: 2000000,
    icon: Users,
    borderColor: 'primary',
  },
];

export const FINANCIAL_REPORTS: FinancialReport[] = [
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

export const PROGRAM_REPORTS: ProgramReport[] = [
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

export const TRANSPARENCY_REPORTS: TransparencyReport[] = [
  {
    icon: FileText,
    title: 'Audit Eksternal',
    description: 'Laporan keuangan diaudit oleh Kantor Akuntan Publik terdaftar',
    detail: 'Terakhir: Desember 2023',
    iconColor: 'text-primary-400',
  },
  {
    icon: Users,
    title: 'Dewan Pengawas',
    description: 'Pengawasan internal oleh dewan pengawas yang independen',
    detail: '5 Anggota Aktif',
    iconColor: 'text-secondary-400',
  },
  {
    icon: TrendingUp,
    title: 'Publikasi Rutin',
    description: 'Laporan keuangan dipublikasikan setiap bulan di website',
    detail: 'Update Bulanan',
    iconColor: 'text-primary-400',
  },
];
