'use client';

import { Link } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  MapPin,
  Building,
  Phone,
  Mail,
  Heart,
  Calendar,
  TrendingUp,
  Target,
  Clock,
} from 'lucide-react';

import { useCurrencyByLocale } from '@/hooks/useCurrencyByLocale';

import {
  CopyButton,
  DonationForm,
  PageLoading,
  CopyShareLinkButton,
} from './components';

import useFetchProgramDetail from './hooks/useFetchProgramDetail';
import { useTranslations, useFormatter } from 'next-intl';

const DonationDetailPage = () => {
  const t = useTranslations('DonationDetailPage');

  const params = useParams<{ slug: string }>();
  const slug = params?.slug ?? '';

  const { program, status, error } = useFetchProgramDetail(slug);

  const format = useFormatter();
  const { convertCurrency } = useCurrencyByLocale();

  const collected = program?.collected_amount ?? 0;
  const target = program?.target_amount ?? 1;

  const progress = Math.round((collected / target) * 100);
  const remainingAmount = target - collected;

  const convertDate = (date: string | undefined) => {
    if (!date) return '-';
    const parsed = new Date(date);
    return parsed.toLocaleDateString('id-ID');
  };

  const bankAccounts = [
    {
      bank: 'Bank Syariah Indonesia (BSI)',
      account: '7310161874',
      name: 'Yayasan Peduli Ilmu Sulawesi Tengah',
    },
  ];

  const eWallets = [
    { name: 'Dana', number: '-' },
    { name: 'OVO', number: '-' },
    { name: 'GoPay', number: '-' },
    { name: 'ShopeePay', number: '-' },
  ];

  if (status === 'loading') {
    return <PageLoading />;
  }

  if (error) {
    return (
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-secondary-600 rounded-full border border-secondary-200">
          <div className="w-4 h-4 border-2 border-secondary-600 border-t-transparent rounded-full animate-spin mr-2"></div>
          <span className="text-sm font-medium">There is something wrong...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header section */}
      <section className="bg-gradient-to-r from-secondary-500 to-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link
              href={`/`}
              className="flex items-center text-white hover:text-primary-200 transition-colors duration-200 mr-4"
            >
              <ArrowLeft className={`h-5 w-5 mr-2`} />
              Kembali
            </Link>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                program?.status === 'active'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-500 text-white'
              }`}
            >
              {program?.status}
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {program?.title}
              </h1>
              <p className="text-primary-100 text-lg mb-4">
                {program?.short_description}
              </p>
              <div className="flex items-center text-primary-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{program?.location}</span>
              </div>
            </div>
            <div className="lg:flex lg:justify-end">
              <div className="w-full lg:w-80 h-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-6 gap-2 h-full">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="bg-white rounded-sm"></div>
                      ))}
                    </div>
                  </div>

                  {/* Main Icon */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    {/* Floating Hearts */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center animate-pulse">
                      <Heart className="h-3 w-3 text-white fill-current" />
                    </div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary-400 rounded-full flex items-center justify-center animate-bounce">
                      <Heart className="h-2 w-2 text-white fill-current" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-white font-semibold text-xl mb-1">
                      Proyek Amal
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end header section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Section */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-accent-800 flex items-center">
                  <TrendingUp className={`h-6 w-6 text-primary-500 mr-3`} />
                  {t('progress-section.title')}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {t('progress-section.progressLabel')}
                    </span>
                    <span className="font-semibold text-accent-800">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-4 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600">
                        {format.number(
                          convertCurrency(program?.collected_amount ?? 0),
                          'currency'
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('progress-section.collectedLabel')}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent-800">
                        {format.number(
                          convertCurrency(program?.target_amount ?? 0),
                          'currency'
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('progress-section.targetLabel')}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary-600">
                        {format.number(convertCurrency(remainingAmount), 'currency')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('progress-section.remainingLabel')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end progress section */}

            {/* Project Details */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-accent-800 flex items-center">
                  <Target className={`h-6 w-6 text-primary-500 mr-3`} />
                  {t('detail-section.title')}
                </h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className={`h-5 w-5 text-muted-foreground mr-3`} />
                      <div>
                        <p className="font-medium text-accent-800">
                          {t('detail-section.locationLabel')}
                        </p>
                        <p className="text-muted-foreground">{program?.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className={`h-5 w-5 text-muted-foreground mr-3`} />
                      <div>
                        <p className="font-medium text-accent-800">
                          {t('detail-section.startDateLabel')}
                        </p>
                        <p className="text-muted-foreground">
                          {convertDate(program?.starts_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className={`h-5 w-5 text-muted-foreground mr-3`} />
                      <div>
                        <p className="font-medium text-accent-800">
                          {t('detail-section.endDateLabel')}
                        </p>
                        <p className="text-muted-foreground">
                          {convertDate(program?.ends_at)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Building className={`h-5 w-5 text-muted-foreground mr-3`} />
                      <div>
                        <p className="font-medium text-accent-800">
                          {t('detail-section.statusLabel')}
                        </p>
                        <p className="text-muted-foreground capitalize">
                          {program?.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-accent-800 mb-2">
                    {t('detail-section.descriptionLabel')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program?.description}
                  </p>
                </div>
              </div>
            </div>
            {/* end project details */}

            {program?.id && <DonationForm programId={program?.id} />}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-card rounded-lg shadow-lg border border-border sticky top-4 z-10">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-bold text-accent-800">
                  {t('sidebar-section.fastAction.title')}
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {/* Share Project  */}
                <CopyShareLinkButton
                  title={t('sidebar-section.fastAction.ctaShareLabel')}
                />
                <div className="mb-6">
                  <h4 className="font-semibold text-accent-800 mb-3">
                    {t('sidebar-section.fastAction.bankTransferLabel')}
                  </h4>
                  <div className="space-y-3">
                    {bankAccounts.map((bank, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg">
                        <p className="font-medium text-accent-800">{bank.bank}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              No. Rekening
                            </p>
                            <p className="font-mono font-semibold">{bank.account}</p>
                            <p className="text-sm text-muted-foreground">
                              a.n. {bank.name}
                            </p>
                          </div>
                          <CopyButton value={bank.account} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-accent-800 mb-3">
                    {t('sidebar-section.fastAction.confirmPaymentLabel')}
                  </h4>
                  <div className="space-y-3">
                    {bankAccounts.map((bank, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg">
                        <p className="font-medium text-accent-800">
                          {t('sidebar-section.fastAction.phoneNumberLabel')}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <div className="flex items-center">
                              {/* <Phone className={`h-4 w-4 mr-3`} /> */}

                              <p className="font-mono font-semibold">
                                +62 823-4992-2884
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Bendahara Yayasan
                            </p>
                          </div>
                          <CopyButton value={'+6282349922884'} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card rounded-lg shadow-lg border border-border">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-bold text-accent-800">
                  {t('sidebar-section.paymentMethod.title')}
                </h3>
              </div>
              <div className="p-6">
                {/* Bank Transfer */}
                <div className="mb-6">
                  <h4 className="font-semibold text-accent-800 mb-3">
                    {t('sidebar-section.paymentMethod.bankTransferLabel')}
                  </h4>
                  <div className="space-y-3">
                    {bankAccounts.map((bank, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg">
                        <p className="font-medium text-accent-800">{bank.bank}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              No. Rekening
                            </p>
                            <p className="font-mono font-semibold">{bank.account}</p>
                            <p className="text-sm text-muted-foreground">
                              a.n. {bank.name}
                            </p>
                          </div>
                          <CopyButton value={bank.account} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* E-Wallet */}
                <div>
                  <h4 className="font-semibold text-accent-800 mb-3">
                    {t('sidebar-section.paymentMethod.ewalletLabel')}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {eWallets.map((wallet, index) => (
                      <div
                        key={index}
                        className="bg-muted p-3 rounded-lg text-center"
                      >
                        <p className="font-medium text-accent-800 text-sm">
                          {wallet.name}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-xs text-muted-foreground font-mono">
                            {wallet.number}
                          </p>
                          <button className="p-1 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                            {/* <Copy className="h-3 w-3" /> */}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact for Donation */}
            <div className="bg-secondary-600 text-white rounded-lg shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">
                  {t('sidebar-section.confirmPayment.title')}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className={`h-4 w-4 mr-3`} />
                    <span className="text-sm">
                      <b>+62 823-4992-2884 </b> | Bendahara Yayasan
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className={`h-4 w-4 mr-3`} />
                    <span className="text-sm">-</span>
                  </div>
                </div>
                <p className="text-xs text-white mt-4">
                  {t('sidebar-section.confirmPayment.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetailPage;
