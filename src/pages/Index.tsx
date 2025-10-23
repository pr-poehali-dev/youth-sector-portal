import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const sectors = [
  {
    id: 'education',
    name: 'Образование',
    icon: 'GraduationCap',
    description: 'Развитие образовательных программ и инициатив для молодёжи',
    color: 'bg-blue-50 border-blue-200',
    participants: 45,
  },
  {
    id: 'culture',
    name: 'Культура',
    icon: 'Palette',
    description: 'Организация культурных мероприятий и поддержка творческих проектов',
    color: 'bg-purple-50 border-purple-200',
    participants: 38,
  },
  {
    id: 'sport',
    name: 'Спорт',
    icon: 'Trophy',
    description: 'Популяризация здорового образа жизни и спортивных мероприятий',
    color: 'bg-green-50 border-green-200',
    participants: 52,
  },
  {
    id: 'social',
    name: 'Социальная политика',
    icon: 'Users',
    description: 'Реализация социальных проектов и волонтёрских инициатив',
    color: 'bg-orange-50 border-orange-200',
    participants: 41,
  },
  {
    id: 'ecology',
    name: 'Экология',
    icon: 'Leaf',
    description: 'Экологические проекты и защита окружающей среды',
    color: 'bg-emerald-50 border-emerald-200',
    participants: 33,
  },
  {
    id: 'media',
    name: 'Медиа',
    icon: 'Newspaper',
    description: 'Информационное сопровождение и PR-деятельность совета',
    color: 'bg-indigo-50 border-indigo-200',
    participants: 28,
  },
];

const news = [
  {
    id: 1,
    title: 'Запуск нового образовательного проекта',
    date: '15 октября 2024',
    category: 'Образование',
  },
  {
    id: 2,
    title: 'Культурный фестиваль "Молодёжь в действии"',
    date: '12 октября 2024',
    category: 'Культура',
  },
  {
    id: 3,
    title: 'Спортивный марафон объединил 200 участников',
    date: '8 октября 2024',
    category: 'Спорт',
  },
];

const events = [
  {
    id: 1,
    title: 'Форум молодых лидеров',
    date: '25 октября 2024',
    location: 'Конференц-зал',
    type: 'Конференция',
  },
  {
    id: 2,
    title: 'Воркшоп по проектной деятельности',
    date: '30 октября 2024',
    location: 'Онлайн',
    type: 'Обучение',
  },
  {
    id: 3,
    title: 'Встреча координаторов секторов',
    date: '5 ноября 2024',
    location: 'Офис совета',
    type: 'Встреча',
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <section id="home" className="py-20 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Молодёжный Совет
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Платформа для координации работы молодёжного совета с разделением на профильные сектора.
              Присоединяйтесь к нам и станьте частью команды активных молодых лидеров!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
                Зарегистрироваться
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="sectors" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">Сектора Совета</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите направление, которое вам наиболее интересно, и присоединяйтесь к команде профессионалов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <Card key={sector.id} className={`border-2 ${sector.color} hover:shadow-lg transition-all hover:-translate-y-1`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name={sector.icon as any} className="text-primary" size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {sector.participants} чел.
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{sector.name}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => navigate(`/sector/${sector.id}`)}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">Новости</h3>
            <p className="text-lg text-muted-foreground">
              Последние события и достижения нашего совета
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          <span>{item.date}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="ArrowRight" size={18} />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-foreground mb-4">Мероприятия</h3>
            <p className="text-lg text-muted-foreground">
              Предстоящие события и встречи
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary">{event.type}</Badge>
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                  <CardDescription className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Calendar" size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={14} />
                      <span>{event.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-foreground mb-6">О проекте</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Молодёжный Совет — это платформа для объединения активной молодёжи, 
              заинтересованной в развитии различных сфер общественной жизни. 
              Мы работаем в шести ключевых направлениях, каждое из которых вносит 
              свой вклад в создание комфортной среды для самореализации молодых людей.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша миссия — создать эффективную систему взаимодействия между молодёжью 
              и органами власти, реализовать значимые проекты и инициативы.
            </p>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6">Контакты</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-2">
                <Icon name="Mail" size={32} className="mx-auto mb-3" />
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-white/80">info@youth-council.ru</p>
              </div>
              <div className="space-y-2">
                <Icon name="Phone" size={32} className="mx-auto mb-3" />
                <h4 className="font-semibold text-lg">Телефон</h4>
                <p className="text-white/80">+7 (800) 555-35-35</p>
              </div>
              <div className="space-y-2">
                <Icon name="MapPin" size={32} className="mx-auto mb-3" />
                <h4 className="font-semibold text-lg">Адрес</h4>
                <p className="text-white/80">г. Москва, ул. Примерная, д. 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2024 Молодёжный Совет. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}