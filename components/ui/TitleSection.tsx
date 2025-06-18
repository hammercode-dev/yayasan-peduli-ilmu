import React from 'react';

type TitleSectionProps = {
  title: string;
  shortDesc: string;
};

export default function TitleSection({ title, shortDesc }: TitleSectionProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-accent-800 mb-4">
        {title}
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">{shortDesc}</p>

      <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
    </div>
  );
}
