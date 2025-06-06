import {
  BookOpen,
  Users,
  Clock,
  GraduationCap,
  Eye,
  Target,
  CheckCircle,
  Home,
  Activity,
} from 'lucide-react';

export default function PondokPesantrenPage() {
  const programs = [
    {
      title: 'Tahfidz Al-Quran',
      description:
        'Program hafalan Al-Quran dengan metode yang telah terbukti efektif',
      features: [
        'Target 30 Juz',
        'Metode Talaqqi',
        "Muraja'ah Rutin",
        'Sertifikat Resmi',
      ],
      icon: BookOpen,
      color: 'bg-primary-500',
    },
    {
      title: 'Takhossus Ilmu Agama',
      description:
        'Pendalaman ilmu-ilmu keislaman dengan kurikulum yang komprehensif',
      features: [
        'Fiqh & Ushul Fiqh',
        'Hadits & Ulum Hadits',
        'Tafsir & Ulum Quran',
        'Bahasa Arab',
      ],
      icon: GraduationCap,
      color: 'bg-secondary-600',
    },
  ];

  const facilities = [
    { name: 'Ruang Kelas', icon: BookOpen, color: 'bg-pink-500' },
    { name: 'Masjid', icon: Activity, color: 'bg-secondary-500' },
    { name: 'Perpustakaan', icon: Home, color: 'bg-accent-500' },
    { name: 'Asrama', icon: Users, color: 'bg-primary-500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-400 text-primary-foreground py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Pondok Pesantren Darul Hadits
          </h1>

          {/* Decorative underline */}
          <div className="mx-auto mb-8 w-20 h-1 rounded bg-primary-600"></div>

          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl mx-auto leading-relaxed">
            Kami siap membantu dan menjawab pertanyaan Anda. Jangan ragu untuk
            menghubungi kami kapan saja.
          </p>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Visi */}
            <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 transition hover:shadow-xl">
              <div className="flex items-center gap-3 px-6 pt-6">
                <div className="flex items-center justify-center rounded-full bg-primary-100 p-2">
                  <Eye className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent-800">Visi</h3>
              </div>
              <div className="px-6 py-5">
                <p className="text-muted-foreground leading-relaxed text-base">
                  Menjadi lembaga pendidikan Islam yang unggul dalam mencetak
                  generasi yang berilmu, berakhlak mulia, dan mampu berkontribusi
                  positif bagi kemajuan umat dan bangsa.
                </p>
              </div>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 transition hover:shadow-xl">
              <div className="flex items-center gap-3 px-6 pt-6">
                <div className="flex items-center justify-center rounded-full bg-secondary-100 p-2">
                  <Target className="h-5 w-5 text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold text-accent-800">Misi</h3>
              </div>
              <div className="px-6 py-5 space-y-4">
                {[
                  'Menyelenggarakan pendidikan Islam yang berkualitas dan terpadu',
                  'Mengembangkan dakwah Islam yang moderat dan rahmatan lil alamiin',
                  'Memberdayakan masyarakat melalui program-program sosial dan ekonomi',
                  'Membangun jaringan kerjasama dengan berbagai pihak untuk kemajuan pendidikan',
                  'Melestarikan nilai-nilai Islam dalam kehidupan bermasyarakat',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-muted/40 p-4 rounded-lg border  hover:shadow transition-shadow"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-accent-900 mb-3">
              Program Unggulan
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Dua program utama yang menjadi fokus dalam pembentukan santri yang
              berkualitas
            </p>
            <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Program cards grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <article
                  key={index}
                  className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border  group focus-within:ring-4 focus-within:ring-primary-400 outline-none"
                  tabIndex={0}
                  aria-labelledby={`program-title-${index}`}
                >
                  {/* Icon and title container */}
                  <div className="p-8 text-center border-b ">
                    <div
                      className={`mx-auto w-16 h-16 ${program.color} rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                      aria-hidden="true"
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3
                      id={`program-title-${index}`}
                      className="text-accent-900 text-2xl font-semibold"
                    >
                      {program.title}
                    </h3>
                  </div>

                  {/* Description and features */}
                  <div className="p-8">
                    <p className="text-muted-foreground mb-8 text-center text-base md:text-lg leading-relaxed">
                      {program.description}
                    </p>
                    <section
                      aria-label={`Materi pembelajaran untuk ${program.title}`}
                    >
                      <h4 className="font-semibold text-accent-900 mb-3 text-lg">
                        Materi Pembelajaran:
                      </h4>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-muted-foreground text-sm md:text-base">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Jadwal Kegiatan Harian
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-lg border ">
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-accent-800 mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-primary-500" />
                      Jadwal Putra
                    </h3>
                    <div className="space-y-3">
                      {[
                        { time: '04:30 - 05:30', activity: 'Tahajud & Subuh' },
                        { time: '05:30 - 07:00', activity: 'Tahfidz Pagi' },
                        { time: '07:00 - 08:00', activity: 'Sarapan' },
                        { time: '08:00 - 11:30', activity: 'Takhossus' },
                        { time: '11:30 - 13:00', activity: 'Dzuhur & Makan' },
                        { time: '13:00 - 15:30', activity: 'Istirahat' },
                        { time: '15:30 - 17:00', activity: "Ashar & Muraja'ah" },
                        { time: '18:00 - 19:30', activity: 'Maghrib & Makan' },
                        { time: '19:30 - 21:00', activity: 'Isya & Tahfidz' },
                        { time: '21:00 - 04:30', activity: 'Istirahat' },
                      ].map((schedule, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-2 border-b "
                        >
                          <span className="text-muted-foreground">
                            {schedule.time}
                          </span>
                          <span className="text-accent-800 font-medium">
                            {schedule.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-accent-800 mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-secondary-600" />
                      Jadwal Putri
                    </h3>
                    <div className="space-y-3">
                      {[
                        { time: '04:30 - 05:30', activity: 'Tahajud & Subuh' },
                        { time: '05:30 - 07:00', activity: 'Tahfidz Pagi' },
                        { time: '07:00 - 08:00', activity: 'Sarapan' },
                        { time: '08:00 - 11:30', activity: 'Takhossus' },
                        { time: '11:30 - 13:00', activity: 'Dzuhur & Makan' },
                        { time: '13:00 - 15:30', activity: 'Istirahat' },
                        { time: '15:30 - 17:00', activity: "Ashar & Muraja'ah" },
                        { time: '18:00 - 19:30', activity: 'Maghrib & Makan' },
                        { time: '19:30 - 21:00', activity: 'Isya & Tahfidz' },
                        { time: '21:00 - 04:30', activity: 'Istirahat' },
                      ].map((schedule, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-2 border-b"
                        >
                          <span className="text-muted-foreground">
                            {schedule.time}
                          </span>
                          <span className="text-accent-800 font-medium">
                            {schedule.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Fasilitas Pondok Pesantren
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fasilitas lengkap untuk mendukung kegiatan pembelajaran dan kehidupan
              santri
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map(({ name, icon: IconComponent, color }, index) => (
              <article
                key={index}
                tabIndex={0}
                aria-label={`Fasilitas: ${name}`}
                className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border text-center p-8 group focus-within:ring-4 focus-within:ring-primary-400 outline-none"
              >
                <div
                  className={`${color} mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <p className="text-accent-900 font-semibold text-lg">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-accent-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Pendaftaran Santri Baru
            </h2>
            <p className="text-primary-100 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Bergabunglah dengan kami untuk menuntut ilmu dan menghafal Al-Quran
              dalam lingkungan yang Islami dan kondusif.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                icon: <Users className="h-7 w-7 text-white" />,
                bg: 'bg-primary-500',
                title: 'Syarat Pendaftaran',
                items: [
                  'Usia 12-25 tahun',
                  'Sehat jasmani & rohani',
                  'Bisa baca Al-Quran',
                  'Berkomitmen tinggal di asrama',
                ],
              },
              {
                icon: <BookOpen className="h-7 w-7 text-white" />,
                bg: 'bg-secondary-600',
                title: 'Berkas Pendaftaran',
                items: [
                  'Fotocopy KTP/KK',
                  'Pas foto 3x4 (3 lembar)',
                  'Surat keterangan sehat',
                  'Surat rekomendasi',
                ],
              },
              {
                icon: <Clock className="h-7 w-7 text-white" />,
                bg: 'bg-primary-500',
                title: 'Jadwal Pendaftaran',
                items: [
                  'Gelombang I: Jan - Mar',
                  'Gelombang II: Apr - Jun',
                  'Tes masuk setiap bulan',
                  'Mulai belajar: Juli',
                ],
              },
            ].map(({ icon, bg, title, items }, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white/5 rounded-xl border border-white/10 shadow-sm hover:shadow-lg transition"
              >
                <div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${bg}`}
                >
                  {icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <ul className="text-sm text-white/80 space-y-1">
                  {items.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
}
