import React from 'react';
import { Link } from '@/i18n/navigation';
import { ArrowRight, Calendar } from 'lucide-react';

interface CardEventProps {
  date: string;
  isRTL: boolean;
  title: string;
  shortDesc: string;
  href: string;
  textColor: 'primary' | 'secondary';
  textLink: string;
}

const CardEvent = ({
  date,
  isRTL,
  title,
  shortDesc,
  href,
  textColor,
  textLink,
}: CardEventProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
      <div className="flex items-center mb-4">
        <Calendar className="h-5 w-5 text-primary-600 mr-2" />
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <h3
        className={`text-lg font-bold text-accent-900 mb-3 ${
          isRTL ? 'font-arabic text-right' : ''
        }`}
      >
        {title}
      </h3>
      <p className={`text-gray-600 mb-4 ${isRTL ? 'font-arabic text-right' : ''}`}>
        {shortDesc}
      </p>

      <Link
        href={href}
        className={`inline-flex items-center font-semibold text-${textColor}-600 hover:text-${textColor}-700 text-sm`}
      >
        {textLink}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default CardEvent;
