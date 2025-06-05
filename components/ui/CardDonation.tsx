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
  progress,
  isRtl,
  title,
  description,
  textTotal,
  total,
  textButton,
}: CardDonationProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover flex flex-col h-full">
      {/* Top Content */}
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <Heart className="h-6 w-6 text-secondary-600 mr-2" />
          <span className="text-sm font-semibold text-secondary-600">
            {Number(progress)}%
          </span>
        </div>
        <h3
          className={`text-lg font-bold text-accent-900 ${isRtl ? 'text-right' : ''}`}
        >
          {title}
        </h3>
        <p className="mb-3 text-xs">Kab. Sigi, Sulawesi Tengah</p>
        <p className={`text-gray-600 mb-4 text-sm ${isRtl ? 'text-right' : ''}`}>
          {description}
        </p>
      </div>

      {/* Bottom (Sticky) Content */}
      <div className="mt-4">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">{textTotal}</span>
            <span className="text-sm font-bold text-accent-900">{total}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-green-700">Collected</span>
            <span className="text-sm font-bold text-green-700">Rp. 50.000.000</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Number(progress)}%` }}
            ></div>
          </div>
        </div>

        <Button variant="secondary" href="" className="w-full mb-3">
          See More Detail
        </Button>
        <Button variant="primary" href="" className="w-full">
          {textButton}
        </Button>
      </div>
    </div>
  );
}

export default CardDonation;
