'use client';
import { useState, Fragment } from 'react';
import { Link } from '@/i18n/navigation';

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
  CheckCircle2,
} from 'lucide-react';
import {
  Disclosure,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Bagaimana cara mendaftar di pondok pesantren?',
    answer:
      'Anda dapat mendaftar dengan menghubungi kami melalui telepon atau WhatsApp. Proses pendaftaran meliputi pengisian formulir, tes masuk, dan wawancara.',
  },
  {
    question: 'Apakah ada biaya pendidikan?',
    answer:
      "Pondok pesantren menerapkan sistem infaq sukarela. Untuk komunitas Ta'shil Ilmi tidak ada biaya, hanya infaq sukarela untuk operasional.",
  },
  {
    question: 'Bagaimana cara berdonasi?',
    answer:
      'Anda dapat berdonasi melalui transfer bank, e-wallet, atau datang langsung ke kantor yayasan. Semua donasi akan digunakan untuk program pendidikan.',
  },
  {
    question: 'Apakah ada program untuk umum?',
    answer:
      "Ya, Komunitas Ta'shil Ilmi terbuka untuk umum. Program ini cocok untuk siapa saja yang ingin memperdalam ilmu agama dan bahasa Arab.",
  },
];

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    setIsOpen(true);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section className="relative bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* Optional: subtle background pattern or SVG blob */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Hubungi Kami
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Kami siap membantu dan menjawab pertanyaan Anda. Jangan ragu untuk
            menghubungi kami kapan saja.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Email Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Email</h3>
              <p className="text-gray-700 text-sm mb-1">
                info@yayasanpeduliilmu.org
              </p>
              <p className="text-gray-700 text-sm">admin@yayasanpeduliilmu.org</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Telepon</h3>
              <p className="text-gray-700 text-sm mb-1">+62 812-3456-7890</p>
              <p className="text-gray-700 text-sm">+62 821-9876-5432</p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">Alamat</h3>
              <p className="text-gray-700 text-sm">
                Jl. Pendidikan No. 123
                <br />
                Palu, Sulawesi Tengah
                <br />
                94111
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mx-auto w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">
                Jam Operasional
              </h3>
              <p className="text-gray-700 text-sm mb-1">
                Senin - Jumat: 08:00 - 17:00
              </p>
              <p className="text-gray-700 text-sm">Sabtu: 08:00 - 12:00</p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-brand-navy text-2xl font-bold">Kirim Pesan</h2>
                <p className="text-gray-600 mt-2">
                  Silakan isi formulir di bawah ini untuk menghubungi kami
                </p>
              </div>

              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Masukkan email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Masukkan nomor telepon"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subjek
                      </label>
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subjek pesan"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-gold resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent-800 hover:bg-accent-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-brand-navy text-2xl font-bold">Lokasi Kami</h2>
                </div>
                <div className="p-6">
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-medium">Peta Lokasi</p>
                      <p className="text-sm">Jl. Pendidikan No. 123, Palu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-brand-navy text-2xl font-bold">Ikuti Kami</h2>
                  <p className="text-gray-600 mt-2">
                    Dapatkan update terbaru melalui media sosial kami
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex space-x-4 mb-4">
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Facebook: Yayasan Peduli Ilmu Sulteng</p>
                    <p>Instagram: @yayasanpeduliilmu</p>
                    <p>YouTube: Yayasan Peduli Ilmu Channel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa pertanyaan yang sering diajukan tentang yayasan dan program
              kami
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Disclosure key={idx}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-lg">
                    <Disclosure.Button className="flex justify-between items-center w-full p-6 text-left text-brand-navy font-semibold text-lg focus:outline-none focus-visible:ring focus-visible:ring-brand-gold">
                      <span>{faq.question}</span>
                      <ChevronUp
                        className={`h-5 w-5 transform transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-6 text-gray-700">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          {/* Overlay */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          </TransitionChild>

          {/* Dialog Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="scale-95 opacity-0"
              enterTo="scale-100 opacity-100"
              leave="ease-in duration-200"
              leaveFrom="scale-100 opacity-100"
              leaveTo="scale-95 opacity-0"
            >
              <DialogPanel className="w-full max-w-xl rounded-2xl bg-white px-6 py-8 shadow-2xl transition-all">
                <div className="flex flex-col items-center text-center">
                  <CheckCircle2
                    className="text-green-500 w-16 h-16 animate-bounce mb-4"
                    aria-hidden="true"
                  />
                  <DialogTitle as="h3" className="text-xl font-bold text-brand-navy">
                    Pesan Terkirim 🎉
                  </DialogTitle>
                  <p className="text-gray-600 mt-2">
                    Terima kasih! Kami akan menghubungi Anda secepatnya.
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    className="inline-flex items-center px-5 py-2 rounded-md bg-secondary-600 hover:bg-secondary-700 text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Tutup
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
