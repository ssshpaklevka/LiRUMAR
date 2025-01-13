import supabase from '../SupaBase';

interface FilterOption {
  value: string;
  label: string;
}

type Product = {
  material?: string;
  color?: string;
  type?: string;
};

export const getFilterOptions = async (
  filterType: 'color' | 'material' | 'type', // фильтры: цвет, материал, ассортимент
): Promise<FilterOption[]> => {
  // Получаем все данные из таблицы товаров
  const { data, error } = await supabase
    .from('products') // Замените 'products' на имя вашей таблицы
    .select(filterType); // Извлекаем только нужный столбец

  if (error) {
    return [];
  }

  if (!data) return [];

  // Убираем дублирующиеся значения и форматируем данные
  const uniqueData = Array.from(
    new Set(data.map((item) => (item as Product)[filterType])), // Указываем тип для item
  )
    .filter((value): value is string => !!value) // Убираем undefined и null
    .map((value) => ({
      value,
      label: value, // В данном случае value и label совпадают
    }));

  return uniqueData;
};
