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
  const colorClasses = {
    primary: 'text-primary-600 hover:text-primary-700',
    secondary: 'text-secondary-600 hover:text-secondary-700',
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between h-full"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Date Section */}
      <div className="flex items-center mb-5 text-gray-500">
        <Calendar className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
        <time className="text-sm font-medium">{date}</time>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold text-accent-900 mb-3 ${
          isRTL ? 'text-right' : ''
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-gray-700 mb-6 leading-relaxed text-base ${
          isRTL ? 'text-right' : ''
        }`}
      >
        {shortDesc}
      </p>

      {/* Link */}
      <Link
        href={href}
        className={`inline-flex items-center font-semibold ${colorClasses[textColor]} text-sm`}
        aria-label={`${textLink} to ${title}`}
      >
        {textLink}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default CardEvent;
