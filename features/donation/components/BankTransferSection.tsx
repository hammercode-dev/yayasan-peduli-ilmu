'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BANK_ACCOUNTS } from '@/lib/constant';

type BankTransferSectionProps = {
  copiedText: string;
  variant?: 'default' | 'compact';
  copyToClipboard: (value: string, label: string) => void;
};

function BankTransferSection({
  copiedText,
  copyToClipboard,
}: BankTransferSectionProps) {
  const t = useTranslations('DonationDetailPage.donation-section');

  return (
    <div className="mb-8">
      <h4 className="font-medium text-foreground mb-6 text-lg sm:text-xl">
        {t('step1label')}
      </h4>

      {BANK_ACCOUNTS.map((bank) => (
        <div
          key={`${bank.bank}-${bank.account}`}
          className="bg-muted/50 rounded-xl p-6 mb-6 border border-border"
        >
          <p className="font-semibold text-foreground mb-6 text-lg">{bank.bank}</p>

          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <BankCard
                label={t('noAccountLabel')}
                value={bank.account}
                footer={`a.n. ${bank.name}`}
                isCopied={copiedText === 'account'}
                onCopy={() => copyToClipboard(bank.account, 'account')}
                buttonLabelDefault={t('btncopyAccLabel2')}
                buttonLabelCopied={t('btncopyAccLabel')}
                variant="primary"
              />

              <BankCard
                label={t('swiftCodeLabel')}
                value={bank.swift}
                footer="PT BANK SYARIAH INDONESIA TBK"
                isCopied={copiedText === 'swift'}
                onCopy={() => copyToClipboard(bank.swift, 'swift')}
                buttonLabelDefault={t('btncopySwiftLabel2')}
                buttonLabelCopied={t('btncopySwiftLabel')}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type BankCardProps = {
  label: string;
  value: string;
  footer: string;
  isCopied: boolean;
  onCopy: () => void;
  buttonLabelDefault: string;
  buttonLabelCopied: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const BankCard = ({
  label,
  value,
  footer,
  isCopied,
  onCopy,
  buttonLabelDefault,
  buttonLabelCopied,
  variant,
}: BankCardProps) => {
  return (
    <div className="bg-card p-4 rounded-lg border border-border">
      <p className="text-sm text-muted-foreground mb-2 font-medium">{label}</p>
      <p className="font-mono font-bold text-xl sm:text-2xl text-foreground mb-3 break-all">
        {value}
      </p>
      <p className="text-base text-muted-foreground break-words mb-4">{footer}</p>
      <Button variant={variant} onClick={onCopy} className={` w-full text-base`}>
        {isCopied ? (
          <span className="flex justify-center items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            {buttonLabelCopied}
          </span>
        ) : (
          buttonLabelDefault
        )}
      </Button>
    </div>
  );
};

export default BankTransferSection;
