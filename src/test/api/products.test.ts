import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest } from 'next/server';

// Mock Prisma
vi.mock('@prisma/client', () => ({
  PrismaClient: vi.fn(() => ({
    product: {
      findMany: vi.fn().mockResolvedValue([]),
      create: vi.fn().mockResolvedValue({ id: '1' }),
      update: vi.fn().mockResolvedValue({ id: '1' }),
      delete: vi.fn().mockResolvedValue({ id: '1' }),
    },
  })),
}));

import { GET, POST } from '@/src/app/api/products/route';

describe('/api/products', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should handle GET request', async () => {
    const request = new NextRequest('http://localhost:3000/api/products');
    const response = await GET(request);

    expect(response.status).toBe(200);
  });

  it('should handle POST request', async () => {
    const productData = {
      name: 'Test Product',
      description: 'Test Description',
      full_description: 'Full Test Description',
      price: 100,
      color: 'Red',
      material: 'Leather',
      type: 'Shoes',
      url: 'test-product',
    };

    const request = new NextRequest('http://localhost:3000/api/products', {
      method: 'POST',
      body: JSON.stringify(productData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const response = await POST(request);
    expect(response.status).toBe(201);
  });
});
