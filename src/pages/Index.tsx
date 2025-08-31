import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: '',
    guests: '',
    dietary: '',
    comments: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here would be the logic to send the form data
    alert('Спасибо за ваш ответ! Мы свяжемся с вами в ближайшее время.');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { label: 'Главная', id: 'hero' },
              { label: 'Фото', id: 'gallery' },
              { label: 'Программа', id: 'program' },
              { label: 'RSVP', id: 'rsvp' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <img 
                src="/img/ab13180c-ea6f-4e0e-ba61-fd43096a2283.jpg"
                alt="Wedding couple"
                className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6">
              Денис & Елизавета
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Приглашаем вас разделить с нами самый счастливый день
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-6 text-primary">
                <Icon name="Calendar" size={24} />
                <span className="text-2xl font-heading font-semibold">13 февраля 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-5xl font-bold text-primary text-center mb-16">
            Наша история
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <img 
                  src="/img/4a180b2a-3c9c-48c9-9911-6b4666a84430.jpg"
                  alt="Wedding photos collage"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="space-y-6">
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="p-6 text-center">
                    <Icon name="Heart" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">5 лет вместе</h3>
                    <p className="text-sm text-foreground/70">
                      С момента нашей первой встречи в университете
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="p-6 text-center">
                    <Icon name="Home" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">Наш дом</h3>
                    <p className="text-sm text-foreground/70">
                      Построили вместе уютное семейное гнездышко
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-5xl font-bold text-primary text-center mb-16">
              Программа дня
            </h2>
            <div className="space-y-8">
              {[
                { time: '14:40', title: 'Церемония бракосочетания', description: 'ЗАГС "Теремок", ул. Молодогвардейская' },
                { time: '15:30', title: 'Ресторан Дубки', description: 'Праздничный банкет с друзьями и семьей' }
              ].map((event, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-heading font-semibold">
                        {event.time}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-primary mb-2">
                          {event.title}
                        </h3>
                        <p className="text-foreground/80">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-5xl font-bold text-primary text-center mb-16">
            Наша история
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <img 
                  src="/img/4a180b2a-3c9c-48c9-9911-6b4666a84430.jpg"
                  alt="Wedding photos collage"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="space-y-6">
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="p-6 text-center">
                    <Icon name="Heart" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">5 лет вместе</h3>
                    <p className="text-sm text-foreground/70">
                      С момента нашей первой встречи в университете
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/20 border-none">
                  <CardContent className="p-6 text-center">
                    <Icon name="Home" size={32} className="text-primary mx-auto mb-3" />
                    <h3 className="font-heading text-xl font-semibold text-primary mb-2">Наш дом</h3>
                    <p className="text-sm text-foreground/70">
                      Построили вместе уютное семейное гнездышко
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold mb-6">Дресс-код</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Мы будем рады видеть вас в нарядах бордовых, кремовых или пастельных тонов
            </p>
            <p className="text-white/80">
              Церемония проходит на открытом воздухе, рекомендуем удобную обувь для прогулки по саду
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-5xl font-bold text-primary text-center mb-16">
              Подтверждение участия
            </h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-center text-primary">
                  Пожалуйста, подтвердите ваше участие до 1 февраля
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Введите ваше полное имя"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="attending">Будете ли вы присутствовать? *</Label>
                      <Select 
                        value={formData.attending} 
                        onValueChange={(value) => setFormData(prev => ({ ...prev, attending: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите ответ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Да, буду присутствовать</SelectItem>
                          <SelectItem value="no">К сожалению, не смогу прийти</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {formData.attending === 'yes' && (
                      <>
                        <div>
                          <Label htmlFor="guests">Количество гостей (включая вас)</Label>
                          <Select 
                            value={formData.guests} 
                            onValueChange={(value) => setFormData(prev => ({ ...prev, guests: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите количество" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 человек</SelectItem>
                              <SelectItem value="2">2 человека</SelectItem>
                              <SelectItem value="3">3 человека</SelectItem>
                              <SelectItem value="4">4 человека</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="dietary">Особенности питания</Label>
                          <Input
                            id="dietary"
                            value={formData.dietary}
                            onChange={(e) => setFormData(prev => ({ ...prev, dietary: e.target.value }))}
                            placeholder="Вегетарианство, аллергии и т.д."
                          />
                        </div>
                      </>
                    )}

                    <div>
                      <Label htmlFor="comments">Комментарии и пожелания</Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => setFormData(prev => ({ ...prev, comments: e.target.value }))}
                        placeholder="Ваши пожелания или вопросы"
                        rows={3}
                      />
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                    Отправить ответ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="font-heading text-3xl font-bold mb-2">Денис & Елизавета</h3>
            <p className="text-white/80">С любовью ждем вас на нашем празднике</p>
          </div>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} />
              <span>wedding@example.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;