import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const ConfiguratorSection = () => {
  const [capColor, setCapColor] = useState('#000000');
  const [logoText, setLogoText] = useState('YOUR BRAND');
  const [logoPosition, setLogoPosition] = useState('front');
  const [embroideryColor, setEmbroideryColor] = useState('#FFFFFF');

  const colors = [
    { name: 'Черный', value: '#000000' },
    { name: 'Белый', value: '#FFFFFF' },
    { name: 'Темно-синий', value: '#1E3A8A' },
    { name: 'Красный', value: '#DC2626' },
    { name: 'Серый', value: '#6B7280' },
    { name: 'Хаки', value: '#84844F' },
  ];

  const positions = [
    { name: 'Спереди', value: 'front' },
    { name: 'Сбоку', value: 'side' },
    { name: 'Сзади', value: 'back' },
  ];

  return (
    <section id="configurator" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary mb-4">
            Конфигуратор бейсболок
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Создайте уникальный дизайн с вашим логотипом и брендовыми цветами
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-scale-in">
              <div
                className="aspect-square rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: capColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                {logoPosition === 'front' && (
                  <div
                    className="text-4xl font-heading font-bold text-center z-10"
                    style={{ color: embroideryColor }}
                  >
                    {logoText}
                  </div>
                )}
                {logoPosition === 'side' && (
                  <div
                    className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-heading font-bold -rotate-90"
                    style={{ color: embroideryColor }}
                  >
                    {logoText}
                  </div>
                )}
                {logoPosition === 'back' && (
                  <div
                    className="absolute bottom-8 text-xl font-heading font-bold"
                    style={{ color: embroideryColor }}
                  >
                    {logoText}
                  </div>
                )}
              </div>
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Icon name="Info" size={16} />
                  <span className="font-medium">Предварительный просмотр</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Это приблизительный вид. Финальный макет будет подготовлен нашими дизайнерами после
                  заказа.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in">
              <div>
                <label className="block font-heading font-semibold text-lg mb-3">
                  Цвет бейсболки
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setCapColor(color.value)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        capColor === color.value
                          ? 'border-primary shadow-lg'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div
                        className="w-full aspect-square rounded-lg mb-2"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="text-sm font-medium text-center">{color.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-heading font-semibold text-lg mb-3">
                  Текст на бейсболке
                </label>
                <Input
                  value={logoText}
                  onChange={(e) => setLogoText(e.target.value.toUpperCase())}
                  placeholder="Введите текст"
                  className="text-lg"
                  maxLength={20}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Максимум 20 символов. Также можете загрузить свой логотип.
                </p>
              </div>

              <div>
                <label className="block font-heading font-semibold text-lg mb-3">
                  Позиция логотипа
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {positions.map((pos) => (
                    <button
                      key={pos.value}
                      onClick={() => setLogoPosition(pos.value)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        logoPosition === pos.value
                          ? 'border-primary bg-primary/5 shadow-lg'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-sm font-medium text-center">{pos.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-heading font-semibold text-lg mb-3">
                  Цвет вышивки
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {colors.map((color) => (
                    <button
                      key={`emb-${color.value}`}
                      onClick={() => setEmbroideryColor(color.value)}
                      className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                        embroideryColor === color.value
                          ? 'border-primary shadow-lg'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div
                        className="w-full aspect-square rounded-lg mb-2"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="text-sm font-medium text-center">{color.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Примерная стоимость (от 100 шт)</span>
                  <span className="text-3xl font-heading font-bold text-primary">380 ₽/шт</span>
                </div>
                <Button size="lg" className="w-full" onClick={() => {
                  const section = document.getElementById('contacts');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Заказать расчет
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Точную стоимость рассчитаем после обсуждения всех деталей заказа
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfiguratorSection;
