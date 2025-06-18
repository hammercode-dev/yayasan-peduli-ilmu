'use client';

import HeaderBanner from '@/components/layout/HeaderBanner';
import {
  AboutSection,
  AchievementIndicatorsSection,
  BookSection,
  ContactSection,
  RuleSection,
  ScheduleSection,
  TeacherSection,
  VisiMisiSection,
} from './components';

const KomunitasTashilPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeaderBanner
        title="Komunitas Ta'shil Ilmi"
        description="  Kami siap membantu dan menjawab pertanyaan Anda. Jangan ragu untuk
            menghubungi kami kapan saja."
      />

      <AboutSection />
      <VisiMisiSection />
      <AchievementIndicatorsSection />
      <TeacherSection />
      <ScheduleSection />
      <BookSection />
      <RuleSection />
      <ContactSection />
    </div>
  );
};

export default KomunitasTashilPage;
