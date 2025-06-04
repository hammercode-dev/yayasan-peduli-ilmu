import React from 'react';
import { Link } from '@/i18n/navigation';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface CardFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
  textColor: string;
  textLink: string;
  isRTL?: boolean;
}

export const CardFeature = ({
  icon: Icon,
  title,
  description,
  href,
  gradient,
  textColor,
  textLink,
  isRTL = false,
}: CardFeatureProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div className={`h-48 ${gradient}`}></div>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <Icon className={`h-8 w-8 ${textColor} mr-3`} />
          <h3
            className={`text-xl font-bold text-accent-900 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {title}
          </h3>
        </div>
        <p className={`text-gray-600 mb-6 ${isRTL ? 'font-arabic text-right' : ''}`}>
          {description}
        </p>
        <Link
          href={href}
          className={`inline-flex items-center font-semibold ${textColor} hover:brightness-110`}
        >
          {textLink}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};
