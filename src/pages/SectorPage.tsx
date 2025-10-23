import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const sectorsData = {
  education: {
    name: 'Образование',
    icon: 'GraduationCap',
    description: 'Развитие образовательных программ и инициатив для молодёжи',
    participants: 45,
    coordinator: 'Анна Смирнова',
    email: 'education@youth-council.ru',
    projects: [
      {
        id: 1,
        title: 'Менторская программа для студентов',
        status: 'active',
        progress: 75,
        description: 'Программа наставничества для студентов младших курсов',
        team: 12,
      },
      {
        id: 2,
        title: 'Курсы профориентации',
        status: 'active',
        progress: 60,
        description: 'Помощь школьникам в выборе будущей профессии',
        team: 8,
      },
      {
        id: 3,
        title: 'Образовательный хакатон',
        status: 'planning',
        progress: 30,
        description: 'Соревнование по разработке образовательных проектов',
        team: 15,
      },
    ],
    achievements: [
      '150+ студентов прошли обучение',
      '5 партнёрских соглашений с вузами',
      '3 успешных образовательных проекта',
    ],
  },
  culture: {
    name: 'Культура',
    icon: 'Palette',
    description: 'Организация культурных мероприятий и поддержка творческих проектов',
    participants: 38,
    coordinator: 'Дмитрий Иванов',
    email: 'culture@youth-council.ru',
    projects: [
      {
        id: 1,
        title: 'Фестиваль молодых талантов',
        status: 'active',
        progress: 85,
        description: 'Ежегодный фестиваль творческой молодёжи',
        team: 20,
      },
      {
        id: 2,
        title: 'Арт-пространство для молодёжи',
        status: 'active',
        progress: 45,
        description: 'Создание креативного пространства для творчества',
        team: 10,
      },
      {
        id: 3,
        title: 'Культурный обмен между городами',
        status: 'planning',
        progress: 25,
        description: 'Программа обмена культурным опытом',
        team: 8,
      },
    ],
    achievements: [
      '500+ участников культурных мероприятий',
      '12 организованных выставок',
      '7 творческих конкурсов проведено',
    ],
  },
  sport: {
    name: 'Спорт',
    icon: 'Trophy',
    description: 'Популяризация здорового образа жизни и спортивных мероприятий',
    participants: 52,
    coordinator: 'Михаил Петров',
    email: 'sport@youth-council.ru',
    projects: [
      {
        id: 1,
        title: 'Молодёжный спортивный марафон',
        status: 'active',
        progress: 90,
        description: 'Ежегодный марафон для всех желающих',
        team: 15,
      },
      {
        id: 2,
        title: 'Школа здорового образа жизни',
        status: 'active',
        progress: 70,
        description: 'Образовательная программа о ЗОЖ',
        team: 12,
      },
      {
        id: 3,
        title: 'Межрайонная спартакиада',
        status: 'planning',
        progress: 40,
        description: 'Спортивные соревнования между районами',
        team: 25,
      },
    ],
    achievements: [
      '800+ участников спортивных событий',
      '15 спортивных мероприятий организовано',
      '4 новых спортивных площадки открыто',
    ],
  },
  social: {
    name: 'Социальная политика',
    icon: 'Users',
    description: 'Реализация социальных проектов и волонтёрских инициатив',
    participants: 41,
    coordinator: 'Елена Васильева',
    email: 'social@youth-council.ru',
    projects: [
      {
        id: 1,
        title: 'Волонтёрская помощь пожилым',
        status: 'active',
        progress: 80,
        description: 'Программа поддержки пожилых людей',
        team: 18,
      },
      {
        id: 2,
        title: 'Социальная адаптация молодёжи',
        status: 'active',
        progress: 65,
        description: 'Помощь в социализации молодых людей',
        team: 13,
      },
      {
        id: 3,
        title: 'Благотворительный марафон',
        status: 'planning',
        progress: 35,
        description: 'Сбор средств на социальные нужды',
        team: 10,
      },
    ],
    achievements: [
      '300+ людей получили помощь',
      '25 волонтёрских акций проведено',
      '10 социальных партнёров привлечено',
    ],
  },
  ecology: {
    name: 'Экология',
    icon: 'Leaf',
    description: 'Экологические проекты и защита окружающей среды',
    participants: 33,
    coordinator: 'Ольга Николаева',
    email: 'ecology@youth-council.ru',
    projects: [
      {
        id: 1,
        title: 'Чистый город',
        status: 'active',
        progress: 70,
        description: 'Экологические субботники и уборка территорий',
        team: 20,
      },
      {
        id: 2,
        title: 'Раздельный сбор отходов',
        status: 'active',
        progress: 55,
        description: 'Установка контейнеров для раздельного сбора',
        team: 8,
      },
      {
        id: 3,
        title: 'Посадка деревьев',
        status: 'planning',
        progress: 20,
        description: 'Озеленение городских территорий',
        team: 15,
      },
    ],
    achievements: [
      '50+ тонн мусора собрано',
      '1000+ деревьев посажено',
      '8 экологических акций организовано',
    ],
  },
  media: {
    name: 'Медиа',
    icon: 'Newspaper',
    description: 'Информационное сопровождение и PR-деятельность совета',
    participants: 28,
    coordinator: 'Артём Сидоров',
    email: 'media@youth-council.ru',
    projects: [
      {
        id: 1,
        title: 'Молодёжный медиапортал',
        status: 'active',
        progress: 85,
        description: 'Новостной портал о деятельности совета',
        team: 12,
      },
      {
        id: 2,
        title: 'Подкаст "Голос молодёжи"',
        status: 'active',
        progress: 60,
        description: 'Еженедельный подкаст с интервью',
        team: 6,
      },
      {
        id: 3,
        title: 'SMM стратегия совета',
        status: 'planning',
        progress: 45,
        description: 'Развитие присутствия в социальных сетях',
        team: 10,
      },
    ],
    achievements: [
      '50 000+ подписчиков в соцсетях',
      '200+ публикаций размещено',
      '15 видеорепортажей создано',
    ],
  },
};

export default function SectorPage() {
  const { sectorId } = useParams<{ sectorId: string }>();
  const navigate = useNavigate();
  
  if (!sectorId || !sectorsData[sectorId as keyof typeof sectorsData]) {
    navigate('/');
    return null;
  }

  const sector = sectorsData[sectorId as keyof typeof sectorsData];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500">Активный</Badge>;
      case 'planning':
        return <Badge className="bg-blue-500">Планирование</Badge>;
      case 'completed':
        return <Badge className="bg-gray-500">Завершён</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/10 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 -ml-2"
          >
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад к секторам
          </Button>

          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="h-20 w-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={sector.icon as any} className="text-primary" size={40} />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-foreground mb-3">{sector.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{sector.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="font-medium">{sector.participants} участников</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={16} className="text-primary" />
                    <span>Координатор: <span className="font-medium">{sector.coordinator}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <a href={`mailto:${sector.email}`} className="font-medium text-primary hover:underline">
                      {sector.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Текущие проекты</h2>
            <div className="grid gap-6">
              {sector.projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      {getStatusBadge(project.status)}
                    </div>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Прогресс выполнения</span>
                          <span className="text-sm font-bold text-primary">{project.progress}%</span>
                        </div>
                        <Progress value={project.progress} className="h-2" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Users" size={16} />
                        <span>{project.team} человек в команде</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Достижения сектора</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sector.achievements.map((achievement, index) => (
                <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="CheckCircle" className="text-primary" size={20} />
                      </div>
                      <p className="text-sm font-medium text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Присоединяйтесь к сектору</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Станьте частью нашей команды и внесите свой вклад в развитие направления
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              Подать заявку
            </Button>
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
