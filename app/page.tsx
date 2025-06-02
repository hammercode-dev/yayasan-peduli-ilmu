"use client";

import HeroBannerWithImage from "@/components/section/HeroBannerWithImage";
import VisiMisiSection from "@/components/section/VisiMisiSection";
import ProgramsSection from "@/components/section/ProgramsSection";
import AnnouncementsSection from "@/components/section/AnnouncementsSection";
import DonationsSection from "@/components/section/DonationsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBannerWithImage />
      <VisiMisiSection />
      <ProgramsSection />
      <AnnouncementsSection />
      <DonationsSection />
    </div>
  );
}
