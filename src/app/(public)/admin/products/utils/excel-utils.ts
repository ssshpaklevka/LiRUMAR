/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { WorkBook, WorkSheet } from 'xlsx';
import { read, utils } from 'xlsx';
import { v4 as uuidv4 } from 'uuid';

import supabase from '@/src/shared/api/SupaBase';

interface ExcelRow {
  id?: string;
  imageUrl?: string;
  thumbnail1Url?: string;
  thumbnail2Url?: string;
  [key: string]: any;
}

export async function readExcelFile(file: File): Promise<ExcelRow[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook: WorkBook = read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet: WorkSheet = workbook.Sheets[sheetName];
      const jsonData: ExcelRow[] = utils.sheet_to_json(worksheet);

      const processedData = await Promise.all(
        jsonData.map(async (row: ExcelRow) => {
          const id = row.id || uuidv4();
          if (row.imageUrl) {
            await uploadImageFromUrl(row.imageUrl, `${id}.png`);
          }
          if (row.thumbnail1Url) {
            await uploadImageFromUrl(row.thumbnail1Url, `${id}-1.png`);
          }
          if (row.thumbnail2Url) {
            await uploadImageFromUrl(row.thumbnail2Url, `${id}-2.png`);
          }
          return { ...row, id };
        }),
      );

      resolve(processedData);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}

async function uploadImageFromUrl(
  url: string,
  fileName: string,
): Promise<void> {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const { error } = await supabase.storage
      .from('products')
      .upload(fileName, blob);
    if (error) {
      console.error('Error uploading image:', error);
    }
  } catch (error) {
    console.error('Error fetching or uploading image:', error);
  }
}
