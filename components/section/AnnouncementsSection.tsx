import React from "react";
import { useLanguage } from "@/contexts/language-context";
import CardEvent from "../ui/CardEvent";

const AnnouncementsSection = () => {
  const { t, language } = useLanguage();

  const announcements = [
    {
      id: 1,
      title: "Pendaftaran Santri Baru 2024/2025",
      date: "2024-01-15",
      excerpt:
        "Dibuka pendaftaran santri baru untuk tahun ajaran 2024/2025. Kuota terbatas.",
    },
    {
      id: 2,
      title: "Program Tahfidz Intensif",
      date: "2024-01-10",
      excerpt:
        "Program tahfidz intensif untuk santri yang ingin menyelesaikan hafalan dengan cepat.",
    },
    {
      id: 3,
      title: "Kegiatan Bakti Sosial",
      date: "2024-01-05",
      excerpt:
        "Yayasan mengadakan bakti sosial untuk masyarakat sekitar pondok pesantren.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* title section */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
              language === "ar" ? "font-arabic" : ""
            }`}
          >
            {t("announcements.title")}
          </h2>
        </div>
        {/* events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement) => (
            <CardEvent
              key={announcement.id}
              date={announcement.date}
              isRTL={language === "ar"}
              title={announcement.title}
              shortDesc={announcement.excerpt}
              href={`/pengumuman/${announcement.id}`}
              textColor="primary"
              textLink={t("announcements.readmore")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
