'use client';

import {
  HeroSection,
  ContactInformationSection,
  FAQSection,
} from '@/components/section/contact';

export default function ContactPageContent() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactInformationSection />
      <FAQSection />
    </div>
  );
}
