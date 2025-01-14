'use client';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Button } from '../button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '../command';
import { cn } from '../../lib/utils';
import { getFilterOptions } from '../../api/get-filters/GetFilters';

// const options = {
//   assortment: [
//     { value: 'assortment1', label: 'Ассортимент1' },
//     { value: 'assortment2', label: 'Ассортимент2' },
//     { value: 'assortment3', label: 'Ассортимент3' },
//   ],
//   material: [
//     { value: 'cotton', label: 'Крокодил' },
//     { value: 'polyester', label: 'Змея' },
//   ],
//   color: [
//     { value: 'red', label: 'Красный' },
//     { value: 'green', label: 'Белый' },
//     { value: 'blue', label: 'Черный' },
//   ],
// };

// const titleMap = {
//   Ассортимент: 'assortment',
//   Материал: 'material',
//   Цвет: 'color',
// };

interface Option {
  value: string;
  label: string;
}

interface Props {
  title: string;
  filterType: 'material' | 'color' | 'type'; // Указываем корректные значения
  onChange: (selectedValues: string[]) => void;
}

const Combobox: FC<Props> = ({ title, filterType, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  // Загружаем данные из Supabase
  useEffect(() => {
    const fetchOptions = async () => {
      setLoading(true);
      const data = await getFilterOptions(filterType);
      setOptions(data);
      setLoading(false);
    };

    fetchOptions();
  }, [filterType]);

  const handleSelect = (option: Option) => {
    setSelectedValues((prev) => {
      const isSelected = prev.find((item) => item.value === option.value);
      const newSelectedValues = isSelected
        ? prev.filter((item) => item.value !== option.value)
        : [...prev, option];

      onChange(newSelectedValues.map((item) => item.value)); // Передаем value в родительский компонент
      return newSelectedValues;
    });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="destructive"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] gap-[10px]  text-[14px] sm:text-[25px] md:text-[14px] px-0 sm:px-0 md:px-0 lg:px-4"
        >
          {selectedValues.length > 0
            ? selectedValues.map((item) => item.label).join(', ')
            : `${title}`}
          {open ? (
            <ChevronUp className="text-foreground" />
          ) : (
            <ChevronDown className="text-foreground" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        {loading ? (
          <div className="p-4 text-center">Загрузка...</div>
        ) : (
          <Command>
            <CommandList>
              {options && options.length > 0 ? (
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleSelect(option)}
                    >
                      <div
                        className={cn(
                          'w-[16px] h-[16px] border rounded-md mr-2 flex items-center justify-center',
                          selectedValues.some(
                            (item) => item.value === option.value,
                          )
                            ? 'bg-background'
                            : 'bg-transparent',
                        )}
                      >
                        {selectedValues.some(
                          (item) => item.value === option.value,
                        ) && <Check className="text-white w-[4px]" />}
                      </div>
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <CommandEmpty className="text-background m-2">
                  Нет доступных данных
                </CommandEmpty>
              )}
            </CommandList>
          </Command>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default Combobox;
