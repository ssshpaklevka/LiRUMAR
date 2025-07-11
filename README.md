# LiRUMAR - E-commerce Platform

Современная e-commerce платформа для продажи обуви и аксессуаров, построенная на Next.js с современным стеком технологий.

## 🚀 Технологии

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Database**: SQLite с Prisma ORM
- **Authentication**: JWT с cookie-based авторизацией
- **File Upload**: Локальное хранение изображений
- **Testing**: Vitest, Testing Library
- **Package Manager**: Bun

## 📦 Установка

1. Клонируйте репозиторий:

```bash
git clone <repository-url>
cd LiRUMAR
```

2. Установите зависимости:

```bash
bun install
```

3. Настройте переменные окружения:

```bash
cp env.example .env
```

4. Инициализируйте базу данных:

```bash
bun run db:migrate
```

5. Создайте администратора:

```bash
bun run db:seed
```

## 🔧 Команды

### Разработка

```bash
bun dev          # Запуск в режиме разработки
bun build        # Сборка для продакшена
bun start        # Запуск продакшн версии
```

### База данных

```bash
bun run db:generate  # Генерация Prisma клиента
bun run db:migrate   # Применение миграций
bun run db:push      # Синхронизация схемы
bun run db:studio    # Открытие Prisma Studio
bun run db:seed      # Создание администратора
```

### Тестирование

```bash
bun test            # Запуск тестов
bun run test:ui     # Запуск с UI
bun run test:coverage # Запуск с покрытием
```

### Линтинг

```bash
bun run lint        # Проверка и исправление кода
bun run format      # Форматирование кода
bun run check-types # Проверка TypeScript
```

## 🔐 Администрирование

### Вход в админ-панель

1. Откройте [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Используйте учетные данные по умолчанию:
   - Email: `admin@example.com`
   - Пароль: `admin123`

### Функции админ-панели

- ✅ Управление продуктами (CRUD)
- ✅ Загрузка изображений
- ✅ Фильтрация и поиск
- ✅ Безопасная авторизация

## 📁 Структура проекта

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   │   ├── products/      # CRUD операции с продуктами
│   │   ├── upload/        # Загрузка изображений
│   │   └── auth/          # Авторизация
│   ├── admin/             # Админ-панель
│   └── (public)/          # Публичные страницы
├── entities/              # Бизнес-логика
├── features/              # Функциональные компоненты
├── pages/                 # Страницы приложения
├── shared/                # Общие компоненты и утилиты
├── widgets/               # Композитные компоненты
├── lib/                   # Библиотеки и хелперы
└── test/                  # Тесты
```

## 🔧 API Endpoints

### Продукты

- `GET /api/products` - Получить все продукты
- `POST /api/products` - Создать продукт
- `PUT /api/products` - Обновить продукт
- `DELETE /api/products` - Удалить продукт

### Изображения

- `POST /api/upload` - Загрузить изображение
- `POST /api/products/[id]/images` - Привязать изображение к продукту

### Авторизация

- `POST /api/auth/login` - Вход в систему
- `POST /api/auth/logout` - Выход из системы

## 🎨 Особенности

### Современная архитектура

- Feature-Sliced Design
- TypeScript для типобезопасности
- Server Components + Client Components
- API Routes для backend логики

### Безопасность

- JWT токены с HttpOnly cookies
- Защищенные роуты для админ-панели
- Валидация данных на сервере

### Производительность

- Оптимизированные изображения
- Lazy loading компонентов
- Кэширование на уровне Next.js

### UX/UI

- Responsive дизайн
- Современные UI компоненты
- Skeleton loaders
- Интуитивная админ-панель

## 🧪 Тестирование

Проект включает тесты для:

- API endpoints
- Компонентов React
- Утилит и хелперов

Запуск тестов:

```bash
bun test
```

## 📝 Миграция с Supabase

Проект был полностью переведен с Supabase на собственные API:

- ✅ Замена Supabase на Prisma ORM
- ✅ Локальное хранение изображений
- ✅ Собственная система авторизации
- ✅ SQLite база данных для разработки

## 🚀 Деплой

Для деплоя в продакшен:

1. Настройте PostgreSQL базу данных
2. Обновите `DATABASE_URL` в `.env`
3. Запустите миграции: `bun run db:migrate`
4. Создайте администратора: `bun run db:seed`
5. Соберите проект: `bun build`

## 📞 Поддержка

Если у вас возникли вопросы или проблемы, создайте issue в репозитории.

---

**Статус**: ✅ Готов к использованию
**Последнее обновление**: Декабрь 2024
