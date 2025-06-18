'use client';

import { useState } from 'react';
import { BookOpen, Download, Calendar, User, Star } from 'lucide-react';
import { BOOKS, CATEGORIES, getCategoryColor } from './constants';
import HeaderBanner from '@/components/layout/HeaderBanner';

const BookPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredBooks =
    selectedCategory === 'Semua'
      ? BOOKS
      : BOOKS.filter((book) => book.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeaderBanner
        title="Buku & Risalah"
        description="Koleksi buku dan risalah karya para ustadz dan akademisi Yayasan Peduli
              Ilmu"
      />

      {/* Statistics */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-800">25+</div>
              <div className="text-muted-foreground">Total Buku</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500">15K+</div>
              <div className="text-muted-foreground">Total Download</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-600">8</div>
              <div className="text-muted-foreground">Kategori</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-800">4.7</div>
              <div className="text-muted-foreground">Rating Rata-rata</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-accent-800 text-white'
                    : 'bg-card text-muted-foreground border border-border hover:bg-muted hover:text-accent-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border group"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-2">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(book.category)}`}
                    >
                      {book.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {book.rating}
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-20 bg-primary-500 rounded flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-accent-800 text-lg font-bold leading-tight mb-2 group-hover:text-primary-600 transition-colors duration-200">
                        {book.title}
                      </h3>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{book.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {book.year} • {book.pages} halaman
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {book.description}
                  </p>

                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <div className="flex justify-between">
                      <span>Bahasa:</span>
                      <span>{book.language}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span>{book.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ukuran:</span>
                      <span>{book.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Download:</span>
                      <span>{book.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-accent-800 hover:bg-accent-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button className="px-3 py-2 border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-3 py-2 text-sm border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                Previous
              </button>
              <button className="px-3 py-2 text-sm bg-accent-800 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-2 text-sm border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                2
              </button>
              <button className="px-3 py-2 text-sm border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                3
              </button>
              <button className="px-3 py-2 text-sm border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors duration-200">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Koleksi Unggulan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Koleksi buku berdasarkan tema dan kategori tertentu
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Seri Tahfidz Al-Quran',
                description: 'Koleksi lengkap panduan menghafal Al-Quran',
                books: 5,
                color: 'bg-primary-500',
              },
              {
                title: 'Seri Ushul Fiqh',
                description: 'Pembelajaran metodologi hukum Islam',
                books: 4,
                color: 'bg-secondary-600',
              },
              {
                title: 'Seri Bahasa Arab',
                description: 'Panduan pembelajaran bahasa Arab praktis',
                books: 6,
                color: 'bg-accent-800',
              },
              {
                title: 'Seri Tafsir Al-Quran',
                description: 'Kajian tafsir ayat-ayat pilihan',
                books: 3,
                color: 'bg-green-600',
              },
              {
                title: 'Seri Akhlak & Adab',
                description: 'Pembentukan karakter Islami',
                books: 4,
                color: 'bg-purple-600',
              },
              {
                title: 'Seri Sejarah Islam',
                description: 'Sejarah dan perkembangan Islam',
                books: 3,
                color: 'bg-orange-600',
              },
            ].map((collection, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border group"
              >
                <div className="p-6 text-center">
                  <div
                    className={`mx-auto w-16 h-16 ${collection.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-accent-800 mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {collection.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-4">
                    {collection.books} Buku
                  </span>
                  <button className="w-full border border-border text-muted-foreground hover:bg-muted hover:text-accent-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Lihat Koleksi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-accent-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kirim Karya Anda</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Kami menerima naskah buku dan risalah dari para akademisi dan praktisi
              pendidikan Islam
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="p-6 border-b border-white/20">
                <h3 className="text-white text-xl font-bold">Syarat Naskah</h3>
              </div>
              <div className="p-6">
                <ul className="text-gray-300 space-y-2">
                  <li>• Naskah original dan belum pernah diterbitkan</li>
                  <li>• Tema sesuai dengan visi misi yayasan</li>
                  <li>• Minimal 50 halaman untuk buku</li>
                  <li>• Format Microsoft Word (.docx)</li>
                  <li>• Dilengkapi dengan biodata penulis</li>
                  <li>• Referensi yang valid dan terpercaya</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
              <div className="p-6 border-b border-white/20">
                <h3 className="text-white text-xl font-bold">Proses Review</h3>
              </div>
              <div className="p-6">
                <ul className="text-gray-300 space-y-2">
                  <li>• Review awal oleh tim editorial (1-2 minggu)</li>
                  <li>• Peer review oleh ahli bidang (2-3 minggu)</li>
                  <li>• Revisi naskah jika diperlukan</li>
                  <li>• Proses editing dan layout</li>
                  <li>• Publikasi dalam format digital</li>
                  <li>• Distribusi melalui platform yayasan</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
              Kirim Naskah
            </button>
            <p className="text-sm text-gray-300 mt-2">
              Email: publikasi@yayasanpeduliilmu.org
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;
