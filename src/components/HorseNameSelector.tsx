import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/utils';
import { Button } from './Button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

interface HorseNameSelectorProps {
  names: Array<string>;
  value: string | null;
  onChange: (value: string | null) => void;
}

export function HorseNameSelector({ names, value, onChange }: HorseNameSelectorProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover modal={true} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {typeof value === 'string' ? value : 'Select name'}

          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search name..." />
          <CommandList>
            <CommandEmpty>No names found.</CommandEmpty>
            <CommandGroup>
              {names.map((name, index) => (
                <CommandItem
                  key={index}
                  value={name}
                  onSelect={(newValue) => {
                    onChange(newValue === value ? null : newValue);
                    setOpen(false);
                  }}
                >
                  {name}

                  <Check className={cn('ml-auto', name === value ? 'opacity-100' : 'opacity-0')} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
