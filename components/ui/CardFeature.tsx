import React from 'react';
import { Link } from '@/i18n/navigation';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface CardFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
  textColor: 'primary' | 'secondary' | 'accent';
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
  // Map textColor to Tailwind color classes explicitly
  const colorClasses = {
    primary: 'text-primary-600 hover:text-primary-700',
    secondary: 'text-secondary-600 hover:text-secondary-700',
    accent: 'text-accent-600 hover:text-accent-700',
  };

  const textColorClass = colorClasses[textColor] || 'text-primary-600';

  return (
    <article
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer flex flex-col"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Gradient header */}
      <div className={`h-48 w-full ${gradient}`} />

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center mb-5">
          <Icon
            className={`${textColorClass} h-8 w-8 flex-shrink-0`}
            aria-hidden="true"
          />
          <h3
            className={`ml-4 text-xl font-semibold text-accent-900 ${
              isRTL ? 'font-arabic text-right ml-0 mr-4' : ''
            }`}
          >
            {title}
          </h3>
        </div>

        <p
          className={`text-gray-700 mb-8 text-base leading-relaxed ${
            isRTL ? 'font-arabic text-right' : ''
          }`}
        >
          {description}
        </p>

        <Link
          href={href}
          className={`${textColorClass} inline-flex items-center font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${textColor}-500 rounded transition`}
          aria-label={`${textLink} to ${title}`}
        >
          {textLink}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};
