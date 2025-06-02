import React from "react";
import { useLanguage } from "@/contexts/language-context";
import CardDonation from "../ui/CardDonation";

const DonationsSection = () => {
  const { t, language } = useLanguage();

  const donationProjects = [
    {
      id: 1,
      name: "Pembangunan Gedung Serbaguna",
      needed: "Rp 500.000.000",
      progress: 25,
      description: "Gedung untuk kegiatan pembelajaran dan acara besar",
    },
    {
      id: 2,
      name: "Renovasi Asrama Putri",
      needed: "Rp 300.000.000",
      progress: 60,
      description: "Perbaikan dan perluasan asrama untuk santri putri",
    },
    {
      id: 3,
      name: "Pembangunan Fasilitas WC",
      needed: "Rp 150.000.000",
      progress: 80,
      description: "Fasilitas sanitasi yang layak untuk santri",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section  */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t("donations.title")}
          </h2>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t("donations.subtitle")}
          </p>
        </div>

        {/* donations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationProjects.map((project) => (
            <CardDonation
              key={project.id}
              progress={project.progress}
              isRtl={language === "ar"}
              title={project.name}
              description={project.description}
              textTotal={t("donations.needed")}
              total={project.needed}
              textButton={t("donations.donate")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;
