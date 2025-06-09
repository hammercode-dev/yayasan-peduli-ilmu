import { TrendingUp } from 'lucide-react';

const CardStatistic = ({
  title,
  value,
  icon: Icon = TrendingUp,
  borderColor = 'primary-500',
}: {
  title: string;
  value: string;
  icon?: React.ElementType;
  borderColor?: string;
}) => {
  return (
    <div
      className={`bg-card rounded-lg shadow-lg border-l-4 border-l-${borderColor} border border-border hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-accent-800">{value}</p>
          </div>
          <Icon className={`h-8 w-8 text-${borderColor}`} />
        </div>
      </div>
    </div>
  );
};

export default CardStatistic;
