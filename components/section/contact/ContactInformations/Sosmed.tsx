import React from 'react';

import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Sosmed() {
  return (
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
  );
}
