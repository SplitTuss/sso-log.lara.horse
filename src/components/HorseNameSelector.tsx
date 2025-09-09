import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Input } from './Input';

interface HorseNameSelectorProps {
  names: Array<string>;
  value: string | null;
  onChange: (value: string | null) => void;
  onOpenChange: (isOpen: boolean) => void;
}

export function HorseNameSelector({
  names,
  value,
  onChange,
  onOpenChange,
}: HorseNameSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    onOpenChange(isOpen);
  };

  const handleTriggerKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleOpenChange(true);
    }
  };

  return (
    <Popover modal={true} open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Input
          readOnly
          placeholder="select name"
          value={value ?? undefined}
          type="input"
          onKeyDown={handleTriggerKeyPress}
        >
          <ChevronDown className="text-muted-foreground mt-2 mr-1.25" size={20} />
        </Input>
      </PopoverTrigger>

      <PopoverContent
        className="w-[200px] p-0"
        onEscapeKeyDown={(e) => {
          e.preventDefault();
          handleOpenChange(false);
        }}
      >
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
