import { useTranslations } from "next-intl";
import HeaderBanner from '@/components/layout/HeaderBanner';
import MarkdownRenderer from '@/components/ui/MarkdownRenderer';

const MahadWomenPage = () => {
  const t = useTranslations('MahadWomen');
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeaderBanner
        title={t('title')}
        description={t('subtitle')}
      />

      {/* Main Content Section */}
      <section className="pb-20 bg-muted/20">
        <div className="w-full mx-auto">
          
          {/* Description Section */}
          <div className="max-w-4xl mx-4 md:mx-auto mt-8 md:mt-20">
            <div className="bg-card rounded-xl shadow-lg border">
              <div className="text-center mb-6">
                <div className="mb-4">
                  <div className="relative rounded-t-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 ">
                    <img
                      src="https://uegsbnqzpdfvntuiuold.supabase.co/storage/v1/object/public/program-images/mahad-female.png"
                      alt="Pondok Putri Darul Hadits Sibowi"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className=" p-8 md:p-12">
                  <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto mb-6"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-accent-900 mb-6">
                    {t('about')}
                  </h2>
                  <div className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center">
                    <MarkdownRenderer markdown={t('description')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MahadWomenPage
