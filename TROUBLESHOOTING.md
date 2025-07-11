# 🔧 Решение проблем LiRUMAR

## Проблема: 404 при клике на товар

### Причины:

1. **Неправильный URL в API запросах** - исправлено ✅
2. **Отсутствие товаров в базе данных**
3. **Проблемы с Prisma Client**

### Решение:

1. **Запустите диагностику:**

```bash
bun run debug-server
```

2. **Пересоздайте проект с нуля:**

```bash
bun run setup-server
```

3. **Проверьте базу данных:**

```bash
bun run db:studio
```

4. **Добавьте тестовые товары:**

```bash
bun run db:seed-products
```

## Проблема: Изображения не отображаются (только alt)

### Причины:

1. **Неправильная конфигурация Next.js Images** - исправлено ✅
2. **Отсутствие папки uploads**
3. **Неправильные пути к изображениям**

### Решение:

1. **Проверьте папку uploads:**

```bash
ls -la public/uploads/products/
```

2. **Создайте папку если её нет:**

```bash
mkdir -p public/uploads/products
```

3. **Проверьте права доступа:**

```bash
chmod 755 public/uploads/products
```

## Проблема: Сервер не запускается

### Решение:

1. **Проверьте .env файл:**

```bash
cat .env
```

2. **Убедитесь, что указан правильный NEXTAUTH_URL:**

```env
NEXTAUTH_URL="https://ваш-домен.com"
```

3. **Пересоберите проект:**

```bash
bun run build
```

## Проблема: Ошибки Prisma

### Решение:

1. **Перегенерируйте Prisma Client:**

```bash
bun run db:generate
```

2. **Синхронизируйте базу данных:**

```bash
bun run db:push
```

3. **Проверьте схему:**

```bash
bun run db:studio
```

## Полная переустановка на сервере

```bash
# 1. Очистка
rm -rf node_modules .next prisma/*.db

# 2. Установка
bun install

# 3. Настройка .env
cp env.production.example .env
# Отредактируйте .env с вашими настройками

# 4. Настройка базы данных
bun run db:generate
bun run db:push
bun run db:seed

# 5. Сборка
bun run build

# 6. Запуск
bun run start
```

## Проверка работоспособности

1. **Проверьте API:**

```bash
curl http://localhost:3000/api/products
```

2. **Проверьте каталог:**

```bash
curl http://localhost:3000/catalog
```

3. **Проверьте админ панель:**

```bash
curl http://localhost:3000/admin/login
```

## Логи и отладка

1. **Проверьте логи сервера:**

```bash
tail -f .next/server.log
```

2. **Проверьте консоль браузера** на ошибки JavaScript

3. **Проверьте Network tab** в DevTools на ошибки API

## Частые ошибки

### "Cannot find module '@prisma/client'"

```bash
bun run db:generate
```

### "Database is locked"

```bash
# Остановите все процессы и перезапустите
pkill -f "bun run start"
bun run start
```

### "Image optimization error"

```bash
# Проверьте next.config.ts и пересоберите
bun run build
```
