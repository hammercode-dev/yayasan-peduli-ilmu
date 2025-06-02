// components/ui/CardWithIcon.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface CardWithIconProps {
  title: string;
  content: React.ReactNode;
  icon: LucideIcon;
  language?: string;
  gradientFrom?: string;
  gradientTo?: string;
  iconColor?: string;
}

const CardWithIcon: React.FC<CardWithIconProps> = ({
  title,
  content,
  icon: Icon,
  language = "id",
  gradientFrom = "from-gray-100",
  gradientTo = "to-gray-200",
  iconColor = "text-gray-500",
}) => {
  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 rounded-2xl`}
    >
      <div className="flex items-center mb-6">
        <Icon className={`h-8 w-8 ${iconColor} mr-3`} />
        <h3
          className={`text-2xl font-bold text-accent-900 ${
            language === "ar" ? "font-arabic" : ""
          }`}
        >
          {title}
        </h3>
      </div>
      <div
        className={`text-gray-700 leading-relaxed ${
          language === "ar" ? "text-right font-arabic" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default CardWithIcon;
