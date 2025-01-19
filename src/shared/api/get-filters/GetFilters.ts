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
  filterType: 'color' | 'material' | 'type',
): Promise<FilterOption[]> => {
  const { data, error } = await supabase.from('products').select(filterType);

  if (error) {
    return [];
  }

  if (!data) return [];

  const uniqueData = Array.from(
    new Set(data.map((item) => (item as Product)[filterType])),
  )
    .filter((value): value is string => !!value)
    .map((value) => ({
      value,
      label: value,
    }));

  return uniqueData;
};
