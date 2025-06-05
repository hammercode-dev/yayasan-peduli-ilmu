'use client';

import { motion, useScroll } from 'motion/react';

import HeroBannerWithImage from '@/components/section/home/HeroBannerWithImage';
import VisiMisiSection from '@/components/section/home/VisiMisiSection';
import ProgramSection from '@/components/section/home/ProgramSection';
import AnnouncementSection from '@/components/section/home/AnnouncementSection';
import DonationSection from '@/components/section/home/DonationSection';

export default function Index() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-20 left-0 right-0 h-1 origin-left bg-gradient-to-r from-primary-500 to-secondary-500 z-10"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroBannerWithImage />
      </motion.div>

      <VisiMisiSection />
      <ProgramSection />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        <AnnouncementSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        <DonationSection />
      </motion.div>
    </div>
  );
}
