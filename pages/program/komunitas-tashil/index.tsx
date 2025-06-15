'use client';
import { Button } from '@/components/ui/Button';
import {
  Clock,
  Calendar,
  ClipboardList,
  Users,
} from 'lucide-react';
import { ACTIVITY_WEEK, BENEFITS, PROGRAMS } from './constants';
import HeaderBanner from '@/components/layout/HeaderBanner';

const KomunitasTashilPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeaderBanner
        title="Komunitas Ta'shil Ilmi"
        description="  Kami siap membantu dan menjawab pertanyaan Anda. Jangan ragu untuk
            menghubungi kami kapan saja."
      />

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent-800 mb-4">
              Program Pembelajaran
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Tiga program utama yang dirancang untuk membangun fondasi ilmu yang
              kuat
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded"></div>
          </div>

          {/* Program Cards */}
          <div className=" grid gap-10 lg:grid-cols-3">
            {PROGRAMS.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl border shadow-sm hover:shadow-lg transition-all group flex flex-col"
                >
                  {/* Icon + Title */}
                  <div className="p-6 text-center">
                    <div
                      className={`mx-auto w-16 h-16 ${program.color} rounded-full flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-accent-800">
                      {program.title}
                    </h3>

                    <span className="mt-2 inline-block text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full font-medium">
                      {program.level}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="px-6 pb-6 text-center">
                    <p className="text-muted-foreground text-base mb-4">
                      {program.description}
                    </p>

                    {/* Topics */}
                    <div className="text-left space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-accent-800 mb-2 uppercase tracking-wide">
                          Materi Pembelajaran
                        </h4>
                        <ul className="space-y-2">
                          {program.topics.map((topic, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 shrink-0"></span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule */}
                      <div className="flex items-center text-sm bg-muted p-3 rounded-xl text-accent-800">
                        <Clock className="h-4 w-4 mr-2 shrink-0" />
                        <span className="font-medium">{program.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              variant={'primary'}
              size={'lg'}
              className="rounded-full shadow transition"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-accent-800 mb-3">
              Keunggulan Program
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Berbagai keunggulan yang akan Anda dapatkan dengan bergabung di
              komunitas kami
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mt-5"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default text-center p-6 flex flex-col items-center"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100 text-primary-600 font-semibold text-lg select-none">
                  {index + 1}
                </div>
                <p className="text-accent-900 font-medium text-base leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Jadwal Kegiatan Mingguan
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg border ">
              <div className="p-6">
                <div className="space-y-4">
                  {ACTIVITY_WEEK.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b "
                    >
                      <div className="flex items-center">
                        <Calendar className={`h-5 w-5 ${schedule.color} mr-3`} />
                        <span className="font-medium text-accent-800">
                          {schedule.day}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{schedule.program}</p>
                        <p className="text-sm text-muted-foreground">
                          {schedule.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-accent-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Pendaftaran Program Ta’shil
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Daftarkan diri Anda untuk mengikuti program pembelajaran ilmu alat yang
              akan memperkuat pemahaman agama Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* Syarat Pendaftaran */}
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 bg-primary-500">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Syarat Pendaftaran</h3>
              <ul className="text-sm text-white/80 space-y-1 text-left">
                <li>• Minimal lulusan SMA/sederajat</li>
                <li>• Bisa membaca Al-Quran dengan baik</li>
                <li>• Memiliki motivasi belajar yang tinggi</li>
                <li>• Berkomitmen mengikuti program hingga selesai</li>
                <li>• Mengisi formulir pendaftaran</li>
              </ul>
            </div>

            {/* Informasi Pendaftaran */}
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 bg-secondary-600">
                <ClipboardList className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Informasi Pendaftaran</h3>
              <ul className="text-sm text-white/80 space-y-1 text-left">
                <li>
                  <strong>Biaya:</strong> Gratis (infaq sukarela)
                </li>
                <li>
                  <strong>Lokasi:</strong> Masjid Al-Ikhlas Palu
                </li>
                <li>
                  <strong>Pendaftaran:</strong> Sepanjang tahun
                </li>
                <li>
                  <strong>Mulai Kelas:</strong> Setiap awal bulan
                </li>
                <li>
                  <strong>Kontak:</strong> +62 812-3456-7890
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Informasi Kontak</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-white/90">
              <div>
                <p className="font-semibold mb-1">Telepon / WhatsApp</p>
                <p className="mb-1">+62 812-3456-7890</p>
                <p>+62 821-9876-5432</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Email</p>
                <p className="mb-1">pendaftaran@darulhadits.org</p>
                <p>info@yayasanpeduliilmu.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KomunitasTashilPage;
