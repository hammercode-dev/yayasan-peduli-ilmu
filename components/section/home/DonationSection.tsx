'use client';

import React from 'react';
import { Building, Home, Droplets, Heart } from 'lucide-react';
import { formatRupiah } from '@/lib/format';

const DonationSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Pembangunan Gedung Serbaguna + Asrama + WC',
      description: 'Pembangunan fasilitas pendukung untuk santri pondok pesantren',
      target: 500000000,
      collected: 275000000,
      progress: 55,
      icon: Building,
      urgent: true,
    },
    {
      id: 2,
      name: 'Bantuan Operasional Pondok Pesantren',
      description: 'Biaya operasional harian untuk kegiatan pembelajaran dan asrama',
      target: 100000000,
      collected: 45000000,
      progress: 45,
      icon: Home,
      urgent: false,
    },
    {
      id: 3,
      name: 'Pembangunan Sumur Bor',
      description:
        'Penyediaan air bersih untuk kebutuhan santri dan kegiatan pondok',
      target: 75000000,
      collected: 60000000,
      progress: 80,
      icon: Droplets,
      urgent: false,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
            Ta&apos;awun (Donasi Terbuka)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mari berpartisipasi dalam membangun sarana dan prasarana pendidikan Islam
            yang berkualitas untuk generasi masa depan
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1"
              >
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    {project.urgent && (
                      <span className="bg-secondary-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                        Mendesak
                      </span>
                    )}
                  </div>
                  <h3 className="text-accent-800 text-lg font-bold group-hover:text-primary-600 transition-colors duration-200">
                    {project.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-accent-800">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-muted-foreground">Terkumpul</p>
                        <p className="font-semibold text-secondary-700">
                          {formatRupiah(project.collected)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">Target</p>
                        <p className="font-semibold text-accent-800">
                          {formatRupiah(project.target)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-accent-600 hover:bg-accent-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group">
                    Baca Selengkapnya
                  </button>
                  <button className="w-full mt-4 bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group">
                    <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Donasi Sekarang
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
