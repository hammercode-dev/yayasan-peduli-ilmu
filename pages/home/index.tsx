import {
  AnnouncementSection,
  DonationSection,
  HeroBannerWithImage,
  ProgramSection,
  VisiMisiSection,
} from './components';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroBannerWithImage />
      <VisiMisiSection />
      <ProgramSection />
      <AnnouncementSection />
      <DonationSection />
    </div>
  );
};
export default HomePage;
