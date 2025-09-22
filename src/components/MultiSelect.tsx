import { useMemo, useState } from 'react';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from './Command';
import { Button, buttonVariants } from './Button';
import { cn } from '@/utils';
import { Checkbox } from './Checkbox';

type Option = { label: string; value: number };

interface MultiSelectProps {
  options: Option[];
  value: number[];
  onChange: (next: number[]) => void;
  placeholder?: string;
  className?: string;
  searchable?: boolean;
  maxTagCount?: number;
}
export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className,
  searchable = false,
  maxTagCount = 3,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  const map = useMemo(() => {
    const m = new Map(options.map((o) => [o.value, o.label]));
    return m;
  }, [options]);

  const selectedLabels = value.map((v) => map.get(v) ?? String(v));
  const visible = selectedLabels.slice(0, maxTagCount);
  const hidden = selectedLabels.length - visible.length;

  const toggle = (v: number) => {
    if (value.includes(v)) onChange(value.filter((x) => x !== v));
    else onChange([...value, v]);
  };
  const allSelected = value.length === options.length && options.length > 0;
  const clearAll = () => onChange([]);
  const selectAll = () => onChange(options.map((o) => o.value));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            buttonVariants({ size: 'sm' }),
            'justify-between min-w-[12rem] data-[state=open]:border-ring',
            className,
          )}
        >
          <span className="flex items-center gap-2">
            {selectedLabels.length === 0 && (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
            {visible.map((l, i) => (
              <span key={i} className="rounded-sm bg-accent/60 px-1.5 py-0.5 text-xs">
                {l}
              </span>
            ))}
            {hidden > 0 && <span className="text-xs text-muted-foreground">+{hidden}</span>}
          </span>
          <ChevronDownIcon className="size-4 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[18rem] p-0">
        <Command>
          {searchable && <CommandInput placeholder="Search..." />}
          <div className="flex items-center justify-between px-2 py-1.5 border-b gap-2">
            <button
              className="text-xs underline text-muted-foreground hover:text-foreground"
              onClick={allSelected ? clearAll : selectAll}
            >
              {allSelected ? 'Clear all' : 'Select all'}
            </button>
            {value.length > 0 && (
              <button
                className="text-xs underline text-muted-foreground hover:text-foreground"
                onClick={clearAll}
              >
                Clear
              </button>
            )}
          </div>
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => {
                const checked = value.includes(opt.value);
                return (
                  <CommandItem
                    key={opt.value}
                    value={opt.label}
                    onSelect={() => toggle(opt.value)}
                    className="cursor-pointer"
                  >
                    <Checkbox checked={checked} onCheckedChange={() => toggle(opt.value)} />
                    <span className="ml-2">{opt.label}</span>
                    {checked && <CheckIcon className="ml-auto size-4 opacity-70" />}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
