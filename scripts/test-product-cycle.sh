#!/bin/bash

# Скрипт для тестирования полного цикла создания товара
# Использование: chmod +x scripts/test-product-cycle.sh && ./scripts/test-product-cycle.sh

set -e

echo "🧪 Тестирование полного цикла создания товара..."

# Проверяем, что сервер запущен
if ! curl -s http://localhost:3000/api/products > /dev/null 2>&1; then
    echo "❌ Сервер не запущен. Запустите: bun run start"
    exit 1
fi

echo "✅ Сервер запущен"

# Шаг 1: Получаем список товаров до создания
echo "📋 Получаем список товаров до создания..."
PRODUCTS_BEFORE=$(curl -s http://localhost:3000/api/products | jq '. | length' 2>/dev/null || echo "0")
echo "Товаров до создания: $PRODUCTS_BEFORE"

# Шаг 2: Создаем тестовый товар
echo "🆕 Создаем тестовый товар..."
CREATE_RESPONSE=$(curl -s -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тестовый товар",
    "description": "Описание тестового товара",
    "full_description": "Полное описание тестового товара",
    "price": 9999,
    "color": "Красный",
    "material": "Кожа",
    "type": "Обувь",
    "url": "test-product"
  }')

echo "Ответ создания: $CREATE_RESPONSE"

# Извлекаем ID созданного товара
PRODUCT_ID=$(echo $CREATE_RESPONSE | jq -r '.id' 2>/dev/null || echo "")

if [ -z "$PRODUCT_ID" ] || [ "$PRODUCT_ID" = "null" ]; then
    echo "❌ Не удалось создать товар"
    exit 1
fi

echo "✅ Товар создан с ID: $PRODUCT_ID"

# Шаг 3: Проверяем, что товар появился в списке
echo "📋 Проверяем список товаров после создания..."
sleep 2
PRODUCTS_AFTER=$(curl -s http://localhost:3000/api/products | jq '. | length' 2>/dev/null || echo "0")
echo "Товаров после создания: $PRODUCTS_AFTER"

if [ "$PRODUCTS_AFTER" -le "$PRODUCTS_BEFORE" ]; then
    echo "❌ Товар не появился в списке"
else
    echo "✅ Товар появился в списке"
fi

# Шаг 4: Пытаемся получить товар по ID
echo "🔍 Получаем товар по ID: $PRODUCT_ID"
GET_RESPONSE=$(curl -s http://localhost:3000/api/products/$PRODUCT_ID)

if echo "$GET_RESPONSE" | jq -e '.error' > /dev/null 2>&1; then
    echo "❌ Ошибка получения товара: $GET_RESPONSE"
else
    echo "✅ Товар получен успешно"
    PRODUCT_NAME=$(echo "$GET_RESPONSE" | jq -r '.name' 2>/dev/null || echo "неизвестно")
    echo "Название товара: $PRODUCT_NAME"
fi

# Шаг 5: Проверяем страницу товара
echo "🌐 Проверяем страницу товара: http://localhost:3000/catalog/$PRODUCT_ID"
PAGE_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/catalog/$PRODUCT_ID)

if [ "$PAGE_RESPONSE" = "200" ]; then
    echo "✅ Страница товара доступна (HTTP $PAGE_RESPONSE)"
elif [ "$PAGE_RESPONSE" = "404" ]; then
    echo "❌ Страница товара возвращает 404"
else
    echo "⚠️  Страница товара возвращает HTTP $PAGE_RESPONSE"
fi

echo ""
echo "📊 Результаты тестирования:"
echo "- Товаров до: $PRODUCTS_BEFORE"
echo "- Товаров после: $PRODUCTS_AFTER"
echo "- ID созданного товара: $PRODUCT_ID"
echo "- HTTP код страницы: $PAGE_RESPONSE"

echo ""
echo "🔧 Рекомендации:"
if [ "$PAGE_RESPONSE" = "404" ]; then
    echo "❌ Проблема: Страница товара возвращает 404"
    echo "   Решение: Пересоберите проект с исправлениями"
    echo "   bun run build"
elif [ "$PRODUCTS_AFTER" -le "$PRODUCTS_BEFORE" ]; then
    echo "❌ Проблема: Товар не появляется в списке"
    echo "   Решение: Проверьте базу данных и API"
else
    echo "✅ Все работает корректно!"
fi 