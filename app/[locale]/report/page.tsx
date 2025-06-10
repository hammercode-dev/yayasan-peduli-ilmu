import HeaderBanner from '@/components/layout/HeaderBanner';
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
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('ReportPage');
  return {
    title: t('meta.title'),
    description: t('meta.description'),
  };
}

export default function LaporanPage() {
  const t = useTranslations('ReportPage');
  const statisticReports = STATISTIC_REPORTS(t);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeaderBanner title={t('meta.title')} description={t('meta.description')} />

      {/* Summary Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statisticReports.map((item) => (
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
              {t('financial-report-section.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('financial-report-section.description')}
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
              {t('program-report-section.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('program-report-section.description')}
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
              {t('audit-information-section.title')}
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              {t('audit-information-section.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TRANSPARENCY_REPORTS.map((item, index) => (
              <CardTransparencyReport key={index} {...item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <h3 className="text-xl font-bold mb-4">{t('contact.title')}</h3>
              <p className="text-gray-300 mb-4">{t('contact.description')}</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">{t('contact.email')}</p>
                  <p>keuangan@yayasanpeduliilmu.org</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">{t('contact.phone')}</p>
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
