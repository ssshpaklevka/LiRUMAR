const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    const email = 'admin@example.com';
    const password = 'admin123';

    // Проверяем, существует ли уже админ
    const existingAdmin = await prisma.user.findUnique({
      where: { email },
    });

    if (existingAdmin) {
      console.log('Администратор уже существует');
      return;
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаем администратора
    const admin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'ADMIN',
      },
    });

    console.log('Администратор создан успешно:');
    console.log('Email:', email);
    console.log('Пароль:', password);
    console.log('ID:', admin.id);
  } catch (error) {
    console.error('Ошибка создания администратора:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
