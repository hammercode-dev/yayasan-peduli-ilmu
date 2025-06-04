import React from 'react';
import { Heart } from 'lucide-react';

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
    <div className="bg-white rounded-2xl shadow-lg p-6 card-hover">
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
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{textTotal}</span>
          <span className="text-sm font-bold text-accent-900">{total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Number(progress)}%` }}
          ></div>
        </div>
      </div>
      <button className="w-full btn-primary rounded-full">{textButton}</button>
    </div>
  );
}

export default CardDonation;
