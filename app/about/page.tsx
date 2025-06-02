"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { Target, Heart, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function TentangPage() {
  const { t, language } = useLanguage();

  const pengurus = [
    {
      name: "Dr. Ahmad Syahid, M.A.",
      position: "Ketua Yayasan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ustadz Muhammad Farid, Lc.",
      position: "Direktur Pendidikan",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ustadzah Fatimah, S.Pd.I.",
      position: "Koordinator Putri",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Ustadz Abdullah, M.Pd.",
      position: "Kepala Asrama Putra",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className={`text-4xl lg:text-5xl font-bold text-accent-900 mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("nav.about")}
            </h1>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              Mengenal lebih dekat Yayasan Peduli Ilmu dan komitmen kami dalam
              membangun generasi Qur&apos;ani
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className={`text-3xl font-bold text-accent-900 mb-6 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                Tentang Yayasan Peduli Ilmu
              </h2>
              <div
                className={`space-y-4 text-gray-600 leading-relaxed ${
                  language === "ar" ? "font-arabic text-right" : ""
                }`}
              >
                <p>
                  Yayasan Peduli Ilmu Sulawesi Tengah didirikan dengan visi
                  mulia untuk membangun generasi Qur&apos;ani yang berakhlak
                  mulia dan bermanfaat bagi umat. Kami berkomitmen dalam
                  pengembangan pendidikan Islam yang berkualitas dan
                  pemberdayaan masyarakat.
                </p>
                <p>
                  Dengan pengalaman bertahun-tahun dalam bidang pendidikan
                  Islam, yayasan ini telah melahirkan banyak santri yang hafal
                  Al-Qur&apos;an dan memiliki pemahaman agama yang mendalam.
                  Program-program kami dirancang untuk mengintegrasikan
                  pendidikan agama dengan pengembangan karakter islami.
                </p>
                <p>
                  Lokasi strategis di Sulawesi Tengah memungkinkan kami untuk
                  melayani masyarakat luas dan menjadi pusat pengembangan ilmu
                  agama di wilayah ini. Fasilitas yang memadai dan tenaga
                  pengajar yang berkualitas menjadi kekuatan utama dalam
                  mencapai visi dan misi yayasan.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Yayasan Peduli Ilmu"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h3
                  className={`text-2xl font-bold text-accent-900 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  Visi
                </h3>
              </div>
              <p
                className={`text-gray-700 leading-relaxed ${
                  language === "ar" ? "font-arabic text-right" : ""
                }`}
              >
                {t("vision.text")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-secondary-600 mr-3" />
                <h3
                  className={`text-2xl font-bold text-accent-900 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {t("mission.title")}
                </h3>
              </div>
              <ul
                className={`space-y-3 ${language === "ar" ? "text-right" : ""}`}
              >
                <li
                  className={`flex items-start ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 bg-secondary-500 rounded-full mt-2 ${
                      language === "ar" ? "ml-3" : "mr-3"
                    } flex-shrink-0`}
                  ></div>
                  <span
                    className={`text-gray-700 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("mission.1")}
                  </span>
                </li>
                <li
                  className={`flex items-start ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 bg-secondary-500 rounded-full mt-2 ${
                      language === "ar" ? "ml-3" : "mr-3"
                    } flex-shrink-0`}
                  ></div>
                  <span
                    className={`text-gray-700 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("mission.2")}
                  </span>
                </li>
                <li
                  className={`flex items-start ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 bg-secondary-500 rounded-full mt-2 ${
                      language === "ar" ? "ml-3" : "mr-3"
                    } flex-shrink-0`}
                  ></div>
                  <span
                    className={`text-gray-700 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("mission.3")}
                  </span>
                </li>
                <li
                  className={`flex items-start ${
                    language === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 bg-secondary-500 rounded-full mt-2 ${
                      language === "ar" ? "ml-3" : "mr-3"
                    } flex-shrink-0`}
                  ></div>
                  <span
                    className={`text-gray-700 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("mission.4")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              Pengurus Yayasan
            </h2>
            <p
              className={`text-lg text-gray-600 max-w-2xl mx-auto ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              Tim pengurus yang berpengalaman dan berkomitmen dalam
              mengembangkan pendidikan Islam
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pengurus.map((person, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center card-hover"
              >
                <div className="relative mb-6">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3
                  className={`text-lg font-bold text-accent-900 mb-2 ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {person.name}
                </h3>
                <p
                  className={`text-primary-600 font-semibold ${
                    language === "ar" ? "font-arabic" : ""
                  }`}
                >
                  {person.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              Informasi Kontak
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary-600" />
              </div>
              <h3
                className={`text-xl font-bold text-accent-900 mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                Alamat
              </h3>
              <p
                className={`text-gray-600 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                Jl. Contoh Alamat No. 123
                <br />
                Palu, Sulawesi Tengah 94111
                <br />
                Indonesia
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-secondary-600" />
              </div>
              <h3
                className={`text-xl font-bold text-accent-900 mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                Telepon
              </h3>
              <p
                className={`text-gray-600 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                +62 451 123456
                <br />
                +62 812 3456 7890
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-accent-600" />
              </div>
              <h3
                className={`text-xl font-bold text-accent-900 mb-4 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                Email
              </h3>
              <p
                className={`text-gray-600 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                info@yayasanpeduliilmu.org
                <br />
                admin@yayasanpeduliilmu.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
