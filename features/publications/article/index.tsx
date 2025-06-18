'use client';

import { useState } from 'react';
import { Calendar, User, Eye, Clock } from 'lucide-react';
import { ARTICLES, CATEGORIES, getCategoryColor } from './constants';

const ArticlePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const filteredArticles =
  selectedCategory === 'Semua'
    ? ARTICLES
    : ARTICLES.filter((article) => article.category === selectedCategory);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-brand text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tulisan & Artikel
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Kumpulan tulisan dan artikel seputar pendidikan Islam dan pengembangan
              ilmu
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-muted/30">
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

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border group"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(article.category)}`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                  <h3 className="text-accent-800 text-lg font-bold leading-tight group-hover:text-primary-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-accent-800 hover:bg-accent-900 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Baca Selengkapnya
                  </button>
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

      {/* Featured Authors */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
              Penulis Unggulan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Para ustadz dan akademisi yang berkontribusi dalam penulisan artikel
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Dr. H. Ahmad Syahid, M.Ag',
                role: 'Ketua Yayasan',
                articles: 15,
                specialization: 'Fiqh & Dakwah',
              },
              {
                name: 'Ustadz Muhammad Farid, Lc',
                role: 'Direktur Pondok Pesantren',
                articles: 12,
                specialization: 'Hadits & Tafsir',
              },
              {
                name: 'Ustadzah Siti Aisyah, M.Pd.I',
                role: 'Koordinator Program Putri',
                articles: 8,
                specialization: 'Pendidikan Islam',
              },
              {
                name: 'Ustadz Abdullah Rahman, S.Ag',
                role: 'Pengajar Senior',
                articles: 10,
                specialization: 'Bahasa Arab',
              },
            ].map((author, index) => {
              const nameParts = author.name.split(' ').filter((n) => n.length > 0);
              const initials =
                nameParts.length >= 2
                  ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
                  : nameParts[0][0];
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border text-center group"
                >
                  <div className="p-6">
                    <div className="mx-auto w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                      {/* <User className="h-8 w-8 text-white" /> */}
                      <p className="font-bold text-white">{initials}</p>
                    </div>
                    <h3 className="font-bold text-accent-800 mb-1">{author.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {author.role}
                    </p>
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-2">
                      {author.specialization}
                    </span>
                    <p className="text-sm text-accent-700">
                      {author.articles} Artikel
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-accent-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Berlangganan Newsletter
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Dapatkan artikel terbaru dan update program yayasan langsung di email
              Anda
            </p>

            <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-md bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 transition"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-primary-900 font-semibold rounded-md transition"
              >
                Berlangganan
              </button>
            </form>
            <p className="text-sm text-gray-300 mt-2">
              Kami menghormati privasi Anda. Unsubscribe kapan saja.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage