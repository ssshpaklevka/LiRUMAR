#!/bin/bash

# Скрипт для диагностики проблем на сервере
# Использование: chmod +x scripts/debug-server.sh && ./scripts/debug-server.sh

set -e

echo "🔍 Диагностика сервера LiRUMAR..."

# Проверяем, что мы в корне проекта
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден"
    exit 1
fi

echo "📋 Проверяем конфигурацию..."

# Проверяем .env файл
if [ -f ".env" ]; then
    echo "✅ .env файл найден"
    echo "📝 Содержимое .env:"
    cat .env | grep -v "SECRET" | grep -v "JWT"
else
    echo "❌ .env файл не найден"
fi

# Проверяем базу данных
if [ -f "prisma/prod.db" ]; then
    echo "✅ База данных найдена: prisma/prod.db"
    echo "📊 Размер базы данных: $(du -h prisma/prod.db | cut -f1)"
else
    echo "❌ База данных не найдена"
fi

# Проверяем собранный проект
if [ -d ".next" ]; then
    echo "✅ Собранный проект найден"
else
    echo "❌ Собранный проект не найден"
fi

# Проверяем папку с загруженными изображениями
if [ -d "public/uploads/products" ]; then
    echo "✅ Папка с изображениями найдена"
    echo "📸 Количество изображений: $(ls -1 public/uploads/products/ | wc -l)"
    echo "📁 Список изображений:"
    ls -la public/uploads/products/ | head -10
else
    echo "❌ Папка с изображениями не найдена"
    echo "📁 Создаем папку..."
    mkdir -p public/uploads/products
fi

# Проверяем Prisma Client
if [ -d "node_modules/.prisma" ]; then
    echo "✅ Prisma Client сгенерирован"
else
    echo "❌ Prisma Client не сгенерирован"
fi

echo ""
echo "🔧 Проверяем API endpoints..."

# Проверяем API продуктов (если сервер запущен)
if curl -s http://localhost:3000/api/products > /dev/null 2>&1; then
    echo "✅ API /api/products доступен"
    echo "📊 Количество продуктов: $(curl -s http://localhost:3000/api/products | jq '. | length' 2>/dev/null || echo 'неизвестно')"
else
    echo "❌ API /api/products недоступен (сервер не запущен?)"
fi

echo ""
echo "📋 Рекомендации:"
echo "1. Убедитесь, что сервер запущен: bun run start"
echo "2. Проверьте логи сервера на ошибки"
echo "3. Проверьте, что в .env указан правильный NEXTAUTH_URL"
echo "4. Убедитесь, что база данных содержит продукты"
echo ""
echo "🔧 Команды для исправления:"
echo "- Пересобрать проект: bun run build"
echo "- Пересоздать базу: bun run db:push"
echo "- Проверить базу: bun run db:studio" 