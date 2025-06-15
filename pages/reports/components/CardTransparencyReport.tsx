export type TransparencyReport = {
  icon: React.ElementType;
  title: string;
  description: string;
  detail: string;
  iconColor?: string;
};

const CardTransparencyReport = ({
  icon: Icon,
  title,
  description,
  detail,
  iconColor = 'text-primary-400',
}: TransparencyReport) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
      <div className="p-6 text-center">
        <Icon className={`h-12 w-12 mx-auto mb-4 ${iconColor}`} />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <p className="text-primary-200 font-semibold">{detail}</p>
      </div>
    </div>
  );
};

export default CardTransparencyReport;
