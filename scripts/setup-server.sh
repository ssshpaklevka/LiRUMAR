#!/bin/bash

# Скрипт для настройки проекта LiRUMAR на сервере
# Использование: chmod +x scripts/setup-server.sh && ./scripts/setup-server.sh

set -e  # Остановить выполнение при ошибке

echo "🚀 Начинаем настройку проекта LiRUMAR на сервере..."

# Проверяем, что мы в корне проекта
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Убедитесь, что вы находитесь в корне проекта."
    exit 1
fi

# Шаг 1: Очистка старых файлов
echo "🧹 Очищаем старые файлы..."
rm -rf node_modules
rm -rf .next
rm -rf prisma/dev.db
rm -rf prisma/prod.db
rm -f bun.lock
rm -f pnpm-lock.yaml
rm -f package-lock.json

# Шаг 2: Установка зависимостей
echo "📦 Устанавливаем зависимости..."
bun install

# Шаг 3: Проверяем наличие .env файла
echo "🔧 Проверяем конфигурацию..."
if [ ! -f ".env" ]; then
    echo "⚠️  Файл .env не найден. Создаем из примера..."
    cp env.example .env
    echo "📝 Пожалуйста, отредактируйте файл .env с правильными настройками для продакшена:"
    echo "   - DATABASE_URL=\"file:./prod.db\""
    echo "   - JWT_SECRET=\"ваш-секретный-ключ\""
    echo "   - NEXTAUTH_SECRET=\"ваш-nextauth-секрет\""
    echo "   - NEXTAUTH_URL=\"https://ваш-домен.com\""
    echo ""
    echo "После редактирования .env файла запустите скрипт снова."
    exit 1
fi

# Шаг 4: Генерируем Prisma Client
echo "🗄️  Генерируем Prisma Client..."
bun run db:generate

# Шаг 5: Создаем и синхронизируем базу данных
echo "🗃️  Создаем базу данных..."
bun run db:push

# Шаг 6: Создаем админа (опционально)
echo "👤 Создаем админа..."
if bun run db:seed; then
    echo "✅ Админ создан успешно"
else
    echo "⚠️  Не удалось создать админа (возможно, уже существует)"
fi

# Шаг 7: Проверяем типы TypeScript
echo "🔍 Проверяем типы TypeScript..."
bun run check-types

# Шаг 8: Собираем проект
echo "🏗️  Собираем проект..."
bun run build

# Шаг 9: Проверяем, что сборка прошла успешно
if [ -d ".next" ]; then
    echo "✅ Сборка завершена успешно!"
else
    echo "❌ Ошибка: Сборка не удалась"
    exit 1
fi

# Шаг 10: Проверяем базу данных
echo "🔍 Проверяем базу данных..."
if [ -f "prisma/prod.db" ]; then
    echo "✅ База данных создана: prisma/prod.db"
else
    echo "❌ Ошибка: База данных не создана"
    exit 1
fi

echo ""
echo "🎉 Настройка завершена успешно!"
echo ""
echo "📋 Следующие шаги:"
echo "1. Запустите проект: bun run start"
echo "2. Или для разработки: bun run dev"
echo "3. Проверьте админ панель: http://ваш-домен/admin/login"
echo "4. Проверьте каталог: http://ваш-домен/catalog"
echo ""
echo "🔧 Полезные команды:"
echo "- Просмотр базы данных: bun run db:studio"
echo "- Создание миграции: bun run db:migrate"
echo "- Сброс базы данных: bun run db:reset"
echo ""
echo "📁 Важные файлы:"
echo "- База данных: prisma/prod.db"
echo "- Конфигурация: .env"
echo "- Логи: .next/server.log (если есть)" 