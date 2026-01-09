import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'configurator', label: 'Конфигуратор' },
    { id: 'wholesale', label: 'Оптовые предложения' },
    { id: 'about', label: 'О компании' },
    { id: 'delivery', label: 'Доставка' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧢</span>
              </div>
              <span className="text-xl font-heading font-bold text-secondary">CapsPro</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>

          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
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
              {[
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
              ].map((cap, idx) => (
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
            <ConfiguratorSection />
          </div>
        </section>

        <section id="wholesale" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
                  Оптовые предложения
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  Чем больше заказ — тем выгоднее цена! Специальные условия для постоянных клиентов
                  и крупных заказов.
                </p>
                <div className="space-y-4">
                  {[
                    { qty: '50-100 шт', price: '420 ₽/шт', discount: 'Базовая цена' },
                    { qty: '100-300 шт', price: '380 ₽/шт', discount: '−10%' },
                    { qty: '300-500 шт', price: '340 ₽/шт', discount: '−20%' },
                    { qty: '500+ шт', price: '290 ₽/шт', discount: '−30%' },
                  ].map((tier, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between animate-slide-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div>
                        <div className="font-heading font-semibold text-lg">{tier.qty}</div>
                        <div className="text-sm text-white/70">{tier.discount}</div>
                      </div>
                      <div className="text-2xl font-bold text-primary">{tier.price}</div>
                    </div>
                  ))}
                </div>
                <Button size="lg" variant="secondary" className="mt-8" onClick={() => scrollToSection('contacts')}>
                  Запросить расчет
                  <Icon name="Calculator" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="animate-scale-in">
                <img
                  src="https://cdn.poehali.dev/projects/09b372ec-6be3-4dd6-858a-35e01b6f15ee/files/69c9764d-0f68-4e1c-a8f7-2e33459a5d95.jpg"
                  alt="Оптовые поставки"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary mb-6">
                О компании CapsPro
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы производим качественные бейсболки с 2015 года. За это время выполнили более 1000
                заказов для спортивных команд, корпоративных клиентов и fashion-брендов.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Качество</h3>
                  <p className="text-muted-foreground">
                    Используем только проверенные материалы и современное оборудование
                  </p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Скорость</h3>
                  <p className="text-muted-foreground">
                    Производство готового заказа за 3-5 дней, экспресс за 24 часа
                  </p>
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Palette" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Кастомизация</h3>
                  <p className="text-muted-foreground">
                    Полная свобода в дизайне: вышивка, принт, нашивки, этикетки
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary mb-4">
                  Доставка
                </h2>
                <p className="text-lg text-muted-foreground">
                  Работаем по всей России. Отправляем в день готовности заказа.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Truck" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xl mb-2">Курьерская доставка</h3>
                        <p className="text-muted-foreground mb-3">
                          По Москве и Санкт-Петербургу — 1-2 дня
                        </p>
                        <div className="text-lg font-semibold text-primary">от 500 ₽</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Package" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xl mb-2">ТК по России</h3>
                        <p className="text-muted-foreground mb-3">
                          СДЭК, Деловые линии, ПЭК — 3-7 дней
                        </p>
                        <div className="text-lg font-semibold text-primary">от 300 ₽</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Store" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xl mb-2">Самовывоз</h3>
                        <p className="text-muted-foreground mb-3">
                          Из нашего офиса в Москве в удобное время
                        </p>
                        <div className="text-lg font-semibold text-primary">Бесплатно</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Gift" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-xl mb-2">При заказе от 100К ₽</h3>
                        <p className="text-muted-foreground mb-3">
                          Бесплатная доставка по всей России
                        </p>
                        <div className="text-lg font-semibold text-primary">0 ₽</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary mb-4">
                  Частые вопросы
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    q: 'Какой минимальный заказ?',
                    a: 'Минимальный заказ — от 50 штук. Для первого заказа можем сделать исключение и изготовить от 30 штук.',
                  },
                  {
                    q: 'Как долго изготавливается заказ?',
                    a: 'Стандартное производство занимает 3-5 рабочих дней с момента утверждения макета. Есть экспресс-производство за 24 часа с доплатой 30%.',
                  },
                  {
                    q: 'Какие способы нанесения логотипа доступны?',
                    a: 'Мы предлагаем вышивку (самый популярный), шелкографию, термоперенос, нашивки и 3D-вышивку. Подберем оптимальный вариант под ваш бюджет и дизайн.',
                  },
                  {
                    q: 'Можно ли заказать образец перед основным тиражом?',
                    a: 'Да, мы изготавливаем пробные образцы. Стоимость образца — 1500 ₽, которые вычитаются из стоимости основного заказа при размещении.',
                  },
                  {
                    q: 'Какие цвета бейсболок доступны?',
                    a: 'В наличии более 20 базовых цветов. Также можем изготовить бейсболки в любом цвете Pantone под заказ (минимум от 100 шт).',
                  },
                  {
                    q: 'Как происходит оплата?',
                    a: 'Для юридических лиц — безналичный расчет по договору с отсрочкой до 14 дней. Для физических лиц — предоплата 50%, остаток при получении.',
                  },
                ].map((faq, idx) => (
                  <Accordion key={idx} type="single" collapsible>
                    <AccordionItem value="item-1" className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-heading font-semibold hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">Контакты</h2>
                <p className="text-lg text-white/80">
                  Свяжитесь с нами любым удобным способом. Ответим в течение часа!
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-lg mb-1">Телефон</div>
                      <div className="text-white/80">+7 (495) 123-45-67</div>
                      <div className="text-sm text-white/60 mt-1">Пн-Пт: 9:00-18:00</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-lg mb-1">Email</div>
                      <div className="text-white/80">info@capspro.ru</div>
                      <div className="text-sm text-white/60 mt-1">Ответим в течение часа</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-lg mb-1">Адрес</div>
                      <div className="text-white/80">г. Москва, ул. Производственная, д. 12</div>
                      <div className="text-sm text-white/60 mt-1">Метро Авиамоторная</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-lg mb-1">Мессенджеры</div>
                      <div className="flex gap-3 mt-2">
                        <Button size="sm" variant="secondary">WhatsApp</Button>
                        <Button size="sm" variant="secondary">Telegram</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="animate-scale-in">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-secondary mb-4">
                      Быстрая заявка
                    </h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Input type="tel" placeholder="Телефон" />
                      </div>
                      <div>
                        <Input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <Textarea placeholder="Опишите ваш заказ" rows={4} />
                      </div>
                      <Button type="submit" className="w-full">
                        Отправить заявку
                        <Icon name="Send" size={18} className="ml-2" />
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/5 border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl">🧢</span>
              </div>
              <span className="font-heading font-semibold text-secondary">CapsPro</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © 2024 CapsPro. Все права защищены. ИНН 7707123456
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

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
  );
};

export default Index;