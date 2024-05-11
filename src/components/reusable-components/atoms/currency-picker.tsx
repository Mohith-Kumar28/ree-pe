// CurrencyPicker.tsx
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface CurrencyPickerProps {
  value: string;
  setValue: (value: string) => void;
}

const currencies = [
  {
    value: 'inr',
    label: 'INR',
  },
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'eur',
    label: 'EUR',
  },
  {
    value: 'gbp',
    label: 'GBP',
  },
  {
    value: 'inr',
    label: 'INR',
  },
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'eur',
    label: 'EUR',
  },
  {
    value: 'gbp',
    label: 'GBP',
  },
  {
    value: 'inr',
    label: 'INR',
  },
  {
    value: 'usd',
    label: 'USD',
  },
  {
    value: 'eur',
    label: 'EUR',
  },
  {
    value: 'gbp',
    label: 'GBP',
  },
  // Add more currencies as needed
];

export const CurrencyPicker: React.FC<CurrencyPickerProps> = ({
  value,
  setValue,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between"
        >
          {value
            ? currencies.find((currency) => currency.value === value)?.label
            : 'Select currency...'}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandEmpty>No currency found.</CommandEmpty>
          <CommandList>
            {currencies.map((currency) => (
              <CommandItem
                key={currency.value}
                value={currency.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === currency.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {currency.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
