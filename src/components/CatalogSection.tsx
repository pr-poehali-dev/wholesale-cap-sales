import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface CatalogSectionProps {
  scrollToSection: (id: string) => void;
}

const CatalogSection = ({ scrollToSection }: CatalogSectionProps) => {
  const caps = [
    {
      name: 'Classic 6-panel',
      price: 'от 350 ₽',
      features: ['100% хлопок', '6 панелей', 'Регулируемая застежка'],
    },
    {
      name: 'Snapback Premium',
      price: 'от 450 ₽',
      features: ['Wool blend', 'Плоский козырек', 'Snapback застежка'],
    },
    {
      name: 'Trucker Mesh',
      price: 'от 380 ₽',
      features: ['Сетка сзади', 'Дышащий материал', 'Foam front'],
    },
    {
      name: 'Dad Hat Soft',
      price: 'от 320 ₽',
      features: ['Мягкая конструкция', 'Изогнутый козырек', 'Strap closure'],
    },
    {
      name: 'Performance Sport',
      price: 'от 420 ₽',
      features: ['Влагоотводящая', 'UV защита', 'Эластичная ткань'],
    },
    {
      name: 'Vintage Washed',
      price: 'от 390 ₽',
      features: ['Винтажная обработка', 'Потертости', 'Уникальный вид'],
    },
  ];

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary mb-4">
            Популярные модели
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите базовую модель для кастомизации под ваш бренд
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caps.map((cap, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/09b372ec-6be3-4dd6-858a-35e01b6f15ee/files/54bc84da-4e5f-4bcf-8f4d-1119c3eeb61e.jpg"
                    alt={cap.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading font-semibold text-xl text-secondary mb-2">
                  {cap.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-4">{cap.price}</div>
                <ul className="space-y-2 mb-4">
                  {cap.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('configurator')}>
                  Кастомизировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
