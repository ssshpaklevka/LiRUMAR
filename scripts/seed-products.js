const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const products = [
  {
    name: 'Кожаные туфли Oxford',
    description: 'Классические мужские туфли из натуральной кожи',
    full_description:
      'Элегантные туфли Oxford из высококачественной итальянской кожи.\nИдеально подходят для деловых встреч и торжественных мероприятий.\nУдобная колодка обеспечивает комфорт в течение всего дня.',
    price: 25000,
    color: 'Черный',
    material: 'Кожа',
    type: 'Обувь',
    url: 'leather-oxford-shoes',
  },
  {
    name: 'Замшевые ботинки Chelsea',
    description: 'Стильные ботинки Chelsea из натуральной замши',
    full_description:
      'Универсальные ботинки Chelsea из мягкой замши.\nПодходят как для повседневной носки, так и для особых случаев.\nЭластичные вставки обеспечивают удобство надевания.',
    price: 28000,
    color: 'Коричневый',
    material: 'Замша',
    type: 'Обувь',
    url: 'suede-chelsea-boots',
  },
  {
    name: 'Кожаная сумка Messenger',
    description: 'Практичная сумка-мессенджер из натуральной кожи',
    full_description:
      'Стильная сумка-мессенджер для повседневного использования.\nВмещает ноутбук до 15 дюймов и все необходимые документы.\nРегулируемый ремень для максимального комфорта.',
    price: 15000,
    color: 'Коричневый',
    material: 'Кожа',
    type: 'Аксессуары',
    url: 'leather-messenger-bag',
  },
  {
    name: 'Кожаный ремень Classic',
    description: 'Классический кожаный ремень ручной работы',
    full_description:
      'Элегантный ремень из натуральной кожи.\nИзготовлен вручную с использованием традиционных техник.\nМеталлическая пряжка с антикоррозийным покрытием.',
    price: 5000,
    color: 'Черный',
    material: 'Кожа',
    type: 'Аксессуары',
    url: 'leather-classic-belt',
  },
  {
    name: 'Кроссовки Urban Style',
    description: 'Современные кроссовки для городского стиля',
    full_description:
      'Стильные кроссовки для активного городского образа жизни.\nДышащие материалы обеспечивают комфорт в течение дня.\nПодходят для прогулок и занятий спортом.',
    price: 12000,
    color: 'Белый',
    material: 'Кожа',
    type: 'Обувь',
    url: 'urban-style-sneakers',
  },
  {
    name: 'Кожаный кошелек Bifold',
    description: 'Компактный кошелек из натуральной кожи',
    full_description:
      'Практичный кошелек с множеством отделений.\nВмещает карты, купюры и документы.\nКомпактный размер идеально подходит для повседневного использования.',
    price: 3500,
    color: 'Коричневый',
    material: 'Кожа',
    type: 'Аксессуары',
    url: 'leather-bifold-wallet',
  },
];

async function seedProducts() {
  try {
    console.log('Начинаю заполнение базы данных тестовыми продуктами...');

    // Очищаем существующие продукты
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();

    // Создаем новые продукты
    for (const productData of products) {
      const product = await prisma.product.create({
        data: productData,
      });

      // Добавляем изображения для каждого продукта
      await prisma.productImage.create({
        data: {
          productId: product.id,
          filename: 'hero.webp',
          path: '/img/hero/hero.webp',
          order: 0,
        },
      });

      console.log(`Создан продукт: ${product.name}`);
    }

    console.log(`Успешно создано ${products.length} продуктов!`);
  } catch (error) {
    console.error('Ошибка при заполнении базы данных:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
