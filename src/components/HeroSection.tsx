import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
              Бейсболки оптом
              <span className="block text-primary mt-2">с вашим брендингом</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Производим и поставляем качественные бейсболки оптом от 50 штук.
              Полная кастомизация под ваш бренд с логотипом и фирменными цветами.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('configurator')}>
                Создать дизайн
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                Каталог моделей
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-heading font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Изготовлено кепок</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary">3-5</div>
                <div className="text-sm text-muted-foreground mt-1">Дней производство</div>
              </div>
            </div>
          </div>
          <div className="animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/09b372ec-6be3-4dd6-858a-35e01b6f15ee/files/3078357a-83ec-41fb-ae4a-ae13e4b98ca7.jpg"
              alt="Коллекция бейсболок"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
