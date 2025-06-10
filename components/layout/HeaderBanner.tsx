interface HeaderBannerProps {
  title: string;
  description: string;
}

const HeaderBanner = ({ title, description }: HeaderBannerProps) => {
  return (
    <section className="gradient-brand text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">{description}</p>
        </div>
      </div>
    </section>
  );
};
export default HeaderBanner;
