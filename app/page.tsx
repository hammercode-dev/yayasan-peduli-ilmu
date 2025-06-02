"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Heart,
  Calendar,
  Target,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function HomePage() {
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`${language === "ar" ? "text-right" : "text-left"}`}
            >
              <h1
                className={`text-4xl lg:text-6xl font-bold text-accent-900 mb-6 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("hero.title")}
              </h1>
              <h2
                className={`text-xl lg:text-2xl text-secondary-600 font-semibold mb-6 ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("hero.subtitle")}
              </h2>
              <p
                className={`text-lg text-gray-600 mb-8 leading-relaxed ${
                  language === "ar" ? "font-arabic" : ""
                }`}
              >
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/program/pondok-pesantren"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  {t("hero.cta.primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/tentang"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {t("hero.cta.secondary")}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/logo.png"
                  alt="Islamic Education"
                  width={600}
                  height={500}
                  // className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("vision.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
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
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-secondary-600 mr-3" />
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

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("programs.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary-600 mr-3" />
                  <h3
                    className={`text-xl font-bold text-accent-900 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("programs.pondok.title")}
                  </h3>
                </div>
                <p
                  className={`text-gray-600 mb-6 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {t("programs.pondok.desc")}
                </p>
                <Link
                  href="/program/pondok-pesantren"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  {t("hero.cta.secondary")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-secondary-400 to-secondary-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-secondary-600 mr-3" />
                  <h3
                    className={`text-xl font-bold text-accent-900 ${
                      language === "ar" ? "font-arabic" : ""
                    }`}
                  >
                    {t("programs.komunitas.title")}
                  </h3>
                </div>
                <p
                  className={`text-gray-600 mb-6 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {t("programs.komunitas.desc")}
                </p>
                <Link
                  href="/program/komunitas"
                  className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold"
                >
                  {t("hero.cta.secondary")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-accent-900 mb-6 ${
                language === "ar" ? "font-arabic" : ""
              }`}
            >
              {t("announcements.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white border border-gray-200 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-sm text-gray-500">
                    {announcement.date}
                  </span>
                </div>
                <h3
                  className={`text-lg font-bold text-accent-900 mb-3 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {announcement.title}
                </h3>
                <p
                  className={`text-gray-600 mb-4 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {announcement.excerpt}
                </p>
                <Link
                  href={`/pengumuman/${announcement.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm"
                >
                  {t("announcements.readmore")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-secondary-600 mr-2" />
                  <span className="text-sm font-semibold text-secondary-600">
                    {t("donations.progress")}: {project.progress}%
                  </span>
                </div>
                <h3
                  className={`text-lg font-bold text-accent-900 mb-3 ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {project.name}
                </h3>
                <p
                  className={`text-gray-600 mb-4 text-sm ${
                    language === "ar" ? "font-arabic text-right" : ""
                  }`}
                >
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {t("donations.needed")}
                    </span>
                    <span className="text-sm font-bold text-accent-900">
                      {project.needed}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <button className="w-full btn-primary">
                  {t("donations.donate")} test
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
