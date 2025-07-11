#!/bin/bash

# Скрипт для запуска проекта LiRUMAR на сервере
# Использование: chmod +x scripts/start-server.sh && ./scripts/start-server.sh

set -e  # Остановить выполнение при ошибке

echo "🚀 Запускаем проект LiRUMAR..."

# Проверяем, что мы в корне проекта
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Убедитесь, что вы находитесь в корне проекта."
    exit 1
fi

# Проверяем наличие .env файла
if [ ! -f ".env" ]; then
    echo "❌ Ошибка: Файл .env не найден. Запустите сначала setup-server.sh"
    exit 1
fi

# Проверяем наличие базы данных
if [ ! -f "prisma/prod.db" ]; then
    echo "❌ Ошибка: База данных не найдена. Запустите сначала setup-server.sh"
    exit 1
fi

# Проверяем наличие собранного проекта
if [ ! -d ".next" ]; then
    echo "⚠️  Проект не собран. Собираем..."
    bun run build
fi

# Проверяем, что Prisma Client сгенерирован
if [ ! -d "node_modules/.prisma" ]; then
    echo "⚠️  Prisma Client не сгенерирован. Генерируем..."
    bun run db:generate
fi

echo "✅ Все проверки пройдены. Запускаем сервер..."

# Запускаем сервер
echo "🌐 Сервер запущен на http://localhost:3000"
echo "📱 Админ панель: http://localhost:3000/admin/login"
echo "🛍️  Каталог: http://localhost:3000/catalog"
echo ""
echo "Для остановки сервера нажмите Ctrl+C"

bun run start 