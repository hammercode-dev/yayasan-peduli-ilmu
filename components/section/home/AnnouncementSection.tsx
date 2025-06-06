import React from 'react';
import { Bell, Calendar, ArrowRight } from 'lucide-react';

const AnnouncementSection = () => {
  const announcements = [
    {
      id: 1,
      title: 'Pendaftaran Santri Baru Tahun 2024/2025',
      date: '15 Januari 2024',
      category: 'Pendaftaran',
      content:
        'Dibuka pendaftaran santri baru untuk Pondok Pesantren Darul Hadits. Kuota terbatas untuk putra dan putri.',
      urgent: true,
    },
    {
      id: 2,
      title: "Kajian Rutin Komunitas Ta'shil Ilmi",
      date: '10 Januari 2024',
      category: 'Kajian',
      content:
        'Kajian rutin setiap hari Sabtu pukul 08.00 WITA di Masjid Al-Ikhlas Palu.',
      urgent: false,
    },
    {
      id: 3,
      title: 'Program Bantuan Beasiswa Yatim',
      date: '5 Januari 2024',
      category: 'Beasiswa',
      content:
        'Tersedia bantuan beasiswa untuk anak yatim yang ingin menuntut ilmu di pondok pesantren.',
      urgent: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            Pengumuman
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Informasi terbaru dari Yayasan Peduli Ilmu Sulawesi Tengah
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      announcement.urgent
                        ? 'bg-secondary-100 text-secondary-800'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {announcement.urgent && <Bell className="w-3 h-3 mr-1" />}
                    {announcement.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {announcement.date}
                  </div>
                </div>
                <h3 className="text-accent-800 text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                  {announcement.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {announcement.content}
                </p>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center group">
                  Baca Selengkapnya
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
