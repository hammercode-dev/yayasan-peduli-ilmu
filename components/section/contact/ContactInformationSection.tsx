'use client';

import { useState } from 'react';

import {
  ContactCards,
  ContactForm,
  ContactMap,
  ContactSocialMedia,
} from './ContactInformations';

import ContactSuccessDialog from './ContactSuccessDialog';

export default function ContactInformationSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactCards />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm openDialog={handleDialogToggle} />
          {/* end Contact Form */}

          <div className="space-y-8">
            <ContactMap />
            <ContactSocialMedia />
          </div>
        </div>
      </div>

      <ContactSuccessDialog isOpen={isOpen} onClose={handleDialogToggle} />
    </section>
  );
}
