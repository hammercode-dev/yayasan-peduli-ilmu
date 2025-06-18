import { CheckCircle } from 'lucide-react';
import TitleSection from '../ui/TitleSection';

type RichText = string | React.ReactNode;

type VisiMisiSectionProps = {
  title: string;
  description: string;
  visi: {
    title: string;
    desc: RichText;
  };
  misi: {
    title: string;
    list: string[];
  };
  isRTL?: boolean;
  visiIcon?: React.ReactNode;
  misiIcon?: React.ReactNode;
  visiColorClass?: string;
  misiColorClass?: string;
};

export const VisiMisiSection = ({
  title,
  description,
  visi,
  misi,
  isRTL = false,
  visiIcon,
  misiIcon,
  visiColorClass = 'bg-primary-100',
  misiColorClass = 'bg-secondary-100',
}: VisiMisiSectionProps) => {
  return (
    <section className="py-20 bg-muted" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TitleSection title={title} shortDesc={description} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Visi Card */}
          <Card icon={visiIcon} title={visi.title} colorClass={visiColorClass}>
            <p className="text-muted-foreground leading-relaxed text-base">
              {visi.desc}
            </p>
          </Card>

          {/* Misi Card */}
          <Card icon={misiIcon} title={misi.title} colorClass={misiColorClass}>
            <div className="space-y-4">
              {misi.list.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-muted/40 p-4 rounded-lg border hover:shadow transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  icon?: React.ReactNode;
  title: string;
  colorClass: string;
  children: React.ReactNode;
};

const Card = ({ icon, title, colorClass, children }: CardProps) => (
  <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 transition hover:shadow-xl">
    <div className="flex items-center gap-3 px-6 pt-6">
      {icon && (
        <div
          className={`flex items-center justify-center rounded-full p-2 ${colorClass}`}
        >
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-accent-800">{title}</h3>
    </div>
    <div className="px-6 py-5">{children}</div>
  </div>
);
