'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from './Button';

interface CardDonationProps {
  progress?: number | string;
  isRtl: boolean;
  title: string;
  description: string;
  textTotal: string;
  total: string;
  textButton: string;
}

function CardDonation({
  progress = 0,
  isRtl,
  title,
  description,
  textTotal,
  total,
  textButton,
}: CardDonationProps) {
  const numericProgress = Number(progress);

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 card-hover flex flex-col h-full cursor-pointer">
      {/* Top Content */}
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <Heart className="h-6 w-6 text-secondary-600 mr-2" />
          <span className="text-base font-semibold text-secondary-600">
            {numericProgress}%
          </span>
        </div>

        <h3
          className={`text-xl lg:text-2xl font-extrabold text-accent-900 ${
            isRtl ? 'text-right' : ''
          }`}
        >
          {title}
        </h3>

        <p className="mb-3 text-sm text-gray-500">Kab. Sigi, Sulawesi Tengah</p>

        <p
          className={`text-base font-medium text-gray-700 mb-4 ${isRtl ? 'text-right' : ''}`}
        >
          {description}
        </p>
      </div>

      {/* Bottom Content */}
      <div className="mt-4">
        <div className="mb-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">{textTotal}</span>
            <span className="text-sm font-bold text-accent-900">{total}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-green-800">Collected</span>
            <span className="text-sm font-bold text-green-800">Rp. 50.000.000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" />
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="secondary" href="" className="w-full">
            See More Detail
          </Button>
          <Button variant="primary" href="" className="w-full">
            {textButton}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardDonation;
