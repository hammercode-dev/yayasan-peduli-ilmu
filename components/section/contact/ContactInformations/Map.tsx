import React from 'react';
import { MapPin } from 'lucide-react';

export default function Map() {
  return (
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
  );
}
