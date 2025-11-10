import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const services = [
    {
      title: "Установка брекет-систем",
      description: "Металлические, керамические, сапфировые",
      icon: "Sparkles"
    },
    {
      title: "Элайнеры",
      description: "Прозрачные каппы для исправления прикуса",
      icon: "CircleDot"
    },
    {
      title: "Детская ортодонтия",
      description: "Раннее исправление прикуса у детей",
      icon: "Baby"
    },
    {
      title: "Ретенционный период",
      description: "Закрепление результата лечения",
      icon: "Shield"
    }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Прекрасный врач! Исправила прикус за 1.5 года. Очень внимательная и профессиональная.",
      rating: 5
    },
    {
      name: "Дмитрий Петров",
      text: "Давно хотел поставить брекеты, но боялся. Доктор развеяла все страхи, всё прошло отлично!",
      rating: 5
    },
    {
      name: "Елена Кузнецова",
      text: "Лечили дочку элайнерами. Результат превзошёл все ожидания. Рекомендую!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-secondary">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        <section className="mb-12 animate-fade-in">
          <Card className="overflow-hidden shadow-2xl border-0">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/9130b47b-f1b3-415c-9015-2d64e8226565/files/ec556765-3713-4b5f-9d27-e0829f688110.jpg"
                  alt="Врач-ортодонт"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Badge className="mb-3 bg-primary text-white">Врач-ортодонт</Badge>
                  <h1 className="text-4xl font-bold mb-2">Доктор Елена Волкова</h1>
                  <p className="text-xl opacity-90">Создаю красивые улыбки с 2012 года</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <Card 
            className="cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-primary"
            onClick={() => setActiveSection(activeSection === 'experience' ? null : 'experience')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Award" className="text-primary" size={28} />
                  <h2 className="text-2xl font-semibold">Опыт и образование</h2>
                </div>
                <Icon 
                  name={activeSection === 'experience' ? 'ChevronUp' : 'ChevronDown'} 
                  className="text-muted-foreground" 
                  size={24} 
                />
              </div>
              
              {activeSection === 'experience' && (
                <div className="mt-6 space-y-4 animate-accordion-down">
                  <div className="flex items-start gap-3">
                    <Icon name="GraduationCap" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Первый МГМУ им. И.М. Сеченова</p>
                      <p className="text-muted-foreground">Стоматология, 2012</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Ординатура по ортодонтии</p>
                      <p className="text-muted-foreground">ЦНИИС, 2014</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="TrendingUp" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">12 лет практики</p>
                      <p className="text-muted-foreground">Более 500 успешных случаев лечения</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Stethoscope" className="text-primary" size={28} />
                <h2 className="text-2xl font-semibold">Услуги и методы лечения</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <Card 
                    key={index} 
                    className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
                  >
                    <CardContent className="p-5">
                      <Icon name={service.icon as any} className="text-primary mb-3" size={32} />
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <Card 
            className="cursor-pointer transition-all duration-300 hover:shadow-xl border-2 hover:border-primary"
            onClick={() => setActiveSection(activeSection === 'clinic' ? null : 'clinic')}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon name="Building2" className="text-primary" size={28} />
                  <h2 className="text-2xl font-semibold">О клинике</h2>
                </div>
                <Icon 
                  name={activeSection === 'clinic' ? 'ChevronUp' : 'ChevronDown'} 
                  className="text-muted-foreground" 
                  size={24} 
                />
              </div>
              
              {activeSection === 'clinic' && (
                <div className="mt-6 space-y-4 animate-accordion-down">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Стоматология "Белоснежка"</p>
                      <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Microscope" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Современное оборудование</p>
                      <p className="text-muted-foreground">3D-сканер, цифровая рентгенография</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Удобный график</p>
                      <p className="text-muted-foreground">Пн-Сб: 9:00 - 21:00, Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="MessageSquare" className="text-primary" size={28} />
                <h2 className="text-2xl font-semibold">Отзывы пациентов</h2>
              </div>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {reviews.map((review, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-2">
                        <CardContent className="p-6">
                          <div className="flex gap-1 mb-3">
                            {[...Array(review.rating)].map((_, i) => (
                              <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                            ))}
                          </div>
                          <p className="text-lg mb-4 italic">"{review.text}"</p>
                          <p className="font-semibold text-primary">— {review.name}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Card className="bg-primary text-primary-foreground border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <Icon name="Calendar" className="mx-auto mb-4 text-white" size={48} />
              <h2 className="text-3xl font-bold mb-3">Запись на консультацию</h2>
              <p className="text-lg mb-6 opacity-90">
                Первичная консультация бесплатно! Составим план лечения и ответим на все вопросы
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 shadow-lg hover:scale-105 transition-transform"
                  onClick={() => window.open('tel:+74951234567', '_self')}
                >
                  <Icon name="Phone" className="mr-2" size={24} />
                  +7 (495) 123-45-67
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-gray-100 shadow-lg hover:scale-105 transition-transform"
                  onClick={() => window.open('https://wa.me/79851234567', '_blank')}
                >
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  WhatsApp
                </Button>
              </div>
              <p className="mt-6 text-sm opacity-75">
                📍 г. Москва, ул. Тверская, д. 15 • Пн-Сб: 9:00-21:00
              </p>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Index;
