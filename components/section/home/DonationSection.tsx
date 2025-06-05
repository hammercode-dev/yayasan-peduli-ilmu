'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import CardDonation from '@/components/ui/CardDonation';
import { motion } from 'motion/react'; // <-- usually from 'framer-motion'

export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const DonationSection: React.FC = () => {
  const t = useTranslations('HomePage');
  const language = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-accent-900 mb-6">
            {t('donation-section.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('donation-section.subTitle')}
          </p>
        </div>

        {/* Animated Donation Cards */}
        <motion.div
          className="grid gap-8 py-4 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={cardVariants}>
              <CardDonation
                progress={t(`donation-section.donation-${i}.progress`)}
                isRtl={language === 'ar'}
                title={t(`donation-section.donation-${i}.name`)}
                description={t(`donation-section.donation-${i}.desc`)}
                textTotal={t('donation-section.attributes.needed')}
                total={t(`donation-section.donation-${i}.needed`)}
                textButton={t('donation-section.attributes.action')}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;
