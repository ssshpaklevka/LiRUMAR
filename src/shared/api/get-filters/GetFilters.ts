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
  try {
    const response = await fetch('/api/products');

    if (!response.ok) {
      return [];
    }

    const products: Product[] = await response.json();

    const uniqueData = Array.from(
      new Set(products.map((item) => item[filterType])),
    )
      .filter((value): value is string => !!value)
      .map((value) => ({
        value,
        label: value,
      }));

    return uniqueData;
  } catch (error) {
    console.error('Error fetching filter options:', error);
    return [];
  }
};
