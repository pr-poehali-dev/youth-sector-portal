import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const sectors = [
  { id: 'education', name: 'Образование', icon: 'GraduationCap' },
  { id: 'culture', name: 'Культура', icon: 'Palette' },
  { id: 'sport', name: 'Спорт', icon: 'Trophy' },
  { id: 'social', name: 'Социальная политика', icon: 'Users' },
  { id: 'ecology', name: 'Экология', icon: 'Leaf' },
  { id: 'media', name: 'Медиа', icon: 'Newspaper' },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    setUserName(name);
    setIsLoggedIn(true);
    setIsRegisterOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Users" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Молодёжный Совет</h1>
              <p className="text-xs text-muted-foreground">Платформа управления секторами</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#sectors" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Сектора
            </a>
            <a href="#news" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Новости
            </a>
            <a href="#events" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Мероприятия
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              О проекте
            </a>
            <a href="#contacts" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground hidden sm:block">{userName}</span>
                <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                  Выйти
                </Button>
              </div>
            ) : (
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90">
                    Регистрация
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Регистрация участника</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleRegister} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя и Фамилия</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sector">Выберите сектор</Label>
                      <Select name="sector" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите направление" />
                        </SelectTrigger>
                        <SelectContent>
                          {sectors.map((sector) => (
                            <SelectItem key={sector.id} value={sector.id}>
                              {sector.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Зарегистрироваться
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
