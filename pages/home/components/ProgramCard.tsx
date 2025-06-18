import { Link } from '@/i18n/navigation';
import { LucideIcon, ArrowRight } from 'lucide-react';

import { Features } from '../types';

type ProgramCardProps = {
  id?: string;
  href: string;
  icon: LucideIcon;
  iconBg: string;
  title: string;
  location: string;
  description: string;
  features: Features[];
  ctaLabel: string;
};

const ProgramCard = ({
  href,
  icon: Icon,
  iconBg,
  title,
  location,
  description,
  features,
  ctaLabel,
}: ProgramCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover:-translate-y-1">
      {/* Card Header */}
      <div className="p-6 text-center border-b border-border">
        <div
          className={`mx-auto w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-accent-800 text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{location}</p>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-muted-foreground mb-6 min-h-[80px]">{description}</p>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {features.map((feature, i) => {
            const FeatureIcon = feature.icon;
            return (
              <div
                key={i}
                className="bg-muted p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200"
              >
                <FeatureIcon
                  className={`h-5 w-5 mx-auto mb-2 ${feature.iconClass}`}
                />
                <p className="text-sm font-medium text-center text-accent-800">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href={href}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-accent-800 hover:bg-accent-900 text-white font-medium rounded-lg transition-colors duration-200 group"
        >
          {ctaLabel}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
