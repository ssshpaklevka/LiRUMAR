// 'use client';
// import type { ChangeEvent, FormEvent } from 'react';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { v4 as uuidv4 } from 'uuid';

// import CardPlaceholder from '@/src/shared/ui/assets/card-placeholder/CardPlaceholder';
// import { Input } from '@/src/shared/ui/input';
// import { Button } from '@/src/shared/ui/button';
// import { Label } from '@/src/shared/ui/label';
// import { Textarea } from '@/src/shared/ui/textarea';
// import supabase from '@/src/shared/api/SupaBase';

// // Initialize Supabase client

// interface ProductFormData {
//   id: string;
//   name: string;
//   description: string;
//   full_description: string;
//   price: number;
//   color: string;
//   material: string;
//   type: string;
// }

// const AddProductForm: React.FC = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState<ProductFormData>({
//     id: uuidv4(),
//     name: '',
//     description: '',
//     full_description: '',
//     price: 0,
//     color: '',
//     material: '',
//     type: '',
//   });
//   const [mainImage, setMainImage] = useState<File | null>(null);
//   const [thumbnails, setThumbnails] = useState<Array<File | null>>([
//     null,
//     null,
//   ]);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === 'price' ? parseFloat(value) : value,
//     }));
//   };

//   const handleImageUpload = async (
//     file: File | null,
//     index: number,
//   ): Promise<string | null> => {
//     if (!file) return null;

//     const fileExt = file.name.split('.').pop();
//     const fileName =
//       index === -1
//         ? `${formData.id}.${fileExt}`
//         : `${formData.id}-${index + 1}.${fileExt}`;
//     const { error } = await supabase.storage
//       .from('products')
//       .upload(fileName, file);

//     if (error) {
//       console.error('Error uploading file:', error);
//       return null;
//     }

//     return fileName;
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Upload images
//       await handleImageUpload(mainImage, -1);
//       await Promise.all(
//         thumbnails.map((file, index) => handleImageUpload(file, index)),
//       );

//       // Insert product data
//       const { error } = await supabase.from('products').insert([formData]);

//       if (error) throw error;

//       router.push(`/products/${formData.id}`);
//     } catch (error) {
//       console.error('Error adding product:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleFileChange = (
//     e: ChangeEvent<HTMLInputElement>,
//     index: number,
//   ) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (index === -1) {
//       setMainImage(file);
//     } else {
//       setThumbnails((prev) => {
//         const newThumbnails = [...prev];
//         newThumbnails[index] = file;
//         return newThumbnails;
//       });
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="mt-[95px] grid grid-cols-1 xl:grid-cols-[760px_2fr] 2xl:grid-cols-[1100px_2fr] gap-5 p-5"
//     >
//       <div className="flex gap-[20px] flex-col sm:flex-row">
//         <div className="relative w-full h-auto min-h-[359px] bg-[#2C2C2C] flex justify-center items-center">
//           <label className="cursor-pointer w-full h-full flex items-center justify-center">
//             <input
//               type="file"
//               accept="image/png"
//               className="hidden"
//               onChange={(e) => handleFileChange(e, -1)}
//             />
//             {mainImage ? (
//               <Image
//                 src={URL.createObjectURL(mainImage) || '/placeholder.svg'}
//                 layout="fill"
//                 objectFit="cover"
//                 alt="Main product image"
//               />
//             ) : (
//               <CardPlaceholder />
//             )}
//           </label>
//         </div>
//         <div className="flex flex-row sm:flex-col justify-between gap-5 2xl:gap-[34px]">
//           {[0, 1].map((index) => (
//             <div
//               key={index}
//               className="relative size-[275px] 2xl:size-[446px] aspect-square bg-[#2C2C2C] flex items-center justify-center"
//             >
//               <label className="cursor-pointer w-full h-full flex items-center justify-center">
//                 <input
//                   type="file"
//                   accept="image/png"
//                   className="hidden"
//                   onChange={(e) => handleFileChange(e, index)}
//                 />
//                 {thumbnails[index] ? (
//                   <Image
//                     src={
//                       URL.createObjectURL(thumbnails[index] as File) ||
//                       '/placeholder.svg'
//                     }
//                     layout="fill"
//                     objectFit="cover"
//                     alt={`Thumbnail ${index + 1}`}
//                     className="rounded-md"
//                   />
//                 ) : (
//                   <CardPlaceholder />
//                 )}
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col justify-between gap-5 sm:gap-10 xl:gap-28 2xl:gap-[170px]">
//         <div>
//           <Label htmlFor="name">Название продукта</Label>
//           <Input
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             className="text-[25px] leading-[25px] sm:text-[44px] sm:leading-[44px] md:text-[33px] md:leading-[33px] 2xl:text-[44px] 2xl:leading-[44px] font-normal"
//           />
//         </div>

//         <div>
//           <Label htmlFor="description">Краткое описание</Label>
//           <Textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             className="text-[14px] leading-[21px] sm:text-[25px] sm:leading-[37px] md:text-[16px] md:leading-[24px] 2xl:text-[25px] 2xl:leading-[37px] opacity-[60%]"
//           />
//         </div>

//         <div>
//           <Label htmlFor="full_description">Полное описание</Label>
//           <Textarea
//             id="full_description"
//             name="full_description"
//             value={formData.full_description}
//             onChange={handleInputChange}
//             className="text-[14px] leading-[21px] sm:text-[25px] sm:leading-[37px] md:text-[16px] md:leading-[24px] 2xl:text-[25px] 2xl:leading-[37px] opacity-[60%]"
//           />
//         </div>

//         <div className="flex flex-col gap-[20px]">
//           <div>
//             <Label htmlFor="price">Цена</Label>
//             <Input
//               id="price"
//               name="price"
//               type="number"
//               value={formData.price}
//               onChange={handleInputChange}
//               className="text-[25px] leading-[30px] sm:text-[44px] sm:leading-[52px] md:text-[25px] md:leading-[30px] 2xl:text-[44px] 2xl:leading-[53px]"
//             />
//           </div>
//           <div>
//             <Label htmlFor="color">Цвет</Label>
//             <Input
//               id="color"
//               name="color"
//               value={formData.color}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <Label htmlFor="material">Материал</Label>
//             <Input
//               id="material"
//               name="material"
//               value={formData.material}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <Label htmlFor="type">Тип</Label>
//             <Input
//               id="type"
//               name="type"
//               value={formData.type}
//               onChange={handleInputChange}
//             />
//           </div>
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="text-[16px] leading-[19px] h-[51px] sm:text-[25px] sm:leading-[30px] sm:h-[94px] md:text-[16px] md:leading-[19px] md:h-[47px] 2xl:text-[25px] 2xl:leading-[30px] 2xl:h-[75px]"
//           >
//             {isSubmitting ? 'Добавление...' : 'Добавить продукт'}
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default AddProductForm;
