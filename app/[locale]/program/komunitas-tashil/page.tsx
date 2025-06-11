import HeaderBanner from '@/components/layout/HeaderBanner';
import {
  AboutSection,
  VisiMisiSection,
  AchievementIndicatorsSection,
  TeacherSection,
  ScheduleSection,
  BookSection,
  RuleSection,
  ContactSection,
} from '@/components/section/komunitas-tashil';

export default function KomunitasTashilPage() {
  // const locale = useLocale();

  return (
    <div className="min-h-screen">
      <HeaderBanner
        title="Komunitas Ta’shilul ‘Ilmi Palu"
        description="Komunitas terbuka untuk siapa saja yang ingin mempelajari ilmu syar’i dari kitab para ulama."
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
}
