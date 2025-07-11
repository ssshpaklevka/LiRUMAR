'use client';

import React, { useState, useRef } from 'react';

import { Button } from '@/src/shared/ui/button';
import { Input } from '@/src/shared/ui/input';
import { Label } from '@/src/shared/ui/label';
import { Textarea } from '@/src/shared/ui/textarea';

interface ProductImage {
  id: string;
  filename: string;
  path: string;
  order: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  price: number;
  color: string;
  material: string;
  type: string;
  url: string;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
}

interface ProductFormProps {
  product?: Product;
  onSuccess: (product: Product) => void;
}

export default function ProductForm({
  product,
  onSuccess,
}: ProductFormProps): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    full_description: product?.full_description || '',
    price: product?.price || 0,
    color: product?.color || '',
    material: product?.material || '',
    type: product?.type || '',
    url: product?.url || '',
  });
  const [images, setImages] = useState<File[]>([]);
  const [currentImages, setCurrentImages] = useState<ProductImage[]>(
    product?.images || [],
  );

  // Обновляем currentImages при изменении product
  React.useEffect(() => {
    console.log('ProductForm: product images changed:', product?.images);
    setCurrentImages(product?.images || []);
  }, [product?.images]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleRemoveCurrentImage = async (imageId: string): Promise<void> => {
    try {
      const response = await fetch('/api/products/images', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageId }),
      });

      if (response.ok) {
        setCurrentImages(currentImages.filter((img) => img.id !== imageId));
      } else {
        alert('Ошибка удаления изображения');
      }
    } catch {
      alert('Ошибка сети');
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      // Создаем или обновляем продукт
      const productResponse = await fetch('/api/products', {
        method: product ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          product ? { ...formData, id: product.id } : formData,
        ),
      });

      if (!productResponse.ok) {
        throw new Error('Ошибка сохранения продукта');
      }

      const savedProduct = await productResponse.json();

      // Загружаем изображения, если они есть
      if (images.length > 0) {
        for (const image of images) {
          const formData = new FormData();
          formData.append('file', image);

          const uploadResponse = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
          });

          if (uploadResponse.ok) {
            const uploadResult = await uploadResponse.json();

            // Привязываем изображение к продукту
            await fetch(`/api/products/${savedProduct.id}/images`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                filename: uploadResult.filename,
                path: uploadResult.path,
              }),
            });
          }
        }
      }

      // Получаем обновленный продукт с изображениями
      const updatedProductResponse = await fetch(
        `/api/products/${savedProduct.id}`,
      );
      const updatedProduct = await updatedProductResponse.json();

      onSuccess(updatedProduct);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка сохранения продукта');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Название</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="price">Цена</Label>
          <Input
            id="price"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Описание</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="full_description">Полное описание</Label>
        <Textarea
          id="full_description"
          name="full_description"
          value={formData.full_description}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label htmlFor="color">Цвет</Label>
          <Input
            id="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="material">Материал</Label>
          <Input
            id="material"
            name="material"
            value={formData.material}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="type">Тип</Label>
          <Input
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <Label htmlFor="images">Изображения</Label>

        {/* Текущие изображения */}
        {currentImages.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">
              Текущие изображения ({currentImages.length}):
            </p>
            <div className="grid grid-cols-3 gap-2">
              {currentImages.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.path}
                    alt="Product"
                    className="w-full h-24 object-cover rounded border"
                    onError={(e) => {
                      console.error('Failed to load image:', image.path);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() =>
                      console.log('Image loaded successfully:', image.path)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveCurrentImage(image.id)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Новые изображения */}
        <div>
          <p className="text-sm text-gray-600 mb-2">
            Добавить новые изображения:
          </p>
          <Input
            id="images"
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
          />
          {images.length > 0 && (
            <div className="mt-2">
              <p className="text-sm text-gray-600 mb-2">Выбранные файлы:</p>
              <div className="grid grid-cols-3 gap-2">
                {images.map((file, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Preview"
                      className="w-full h-24 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setImages(images.filter((_, i) => i !== index))
                      }
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? 'Сохранение...' : product ? 'Обновить' : 'Создать'}
      </Button>
    </form>
  );
}
