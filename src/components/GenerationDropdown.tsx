import { ChevronDown } from 'lucide-react';
import { Button } from './Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './Dropdown';

export const AVAILABLE_GENERATIONS = [1, 2, 3];

interface GenerationDropdownProps {
  selectedGens: number[];
  onChange: (value: number[]) => void;
}

export function GenerationDropdown({ selectedGens, onChange }: GenerationDropdownProps) {
  const toggleGeneration = (gen: number) => {
    if (selectedGens.includes(gen)) {
      const newSelectedGens = selectedGens.filter((selectedGen) => {
        return selectedGen !== gen;
      });
      onChange(newSelectedGens);
    } else {
      const newSelectedGens = [...selectedGens, gen];
      onChange(newSelectedGens);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mb-1">
        <Button variant="outline">
          generations <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {AVAILABLE_GENERATIONS.map((gen) => (
          <DropdownMenuCheckboxItem
            key={gen}
            checked={selectedGens.includes(gen)}
            onCheckedChange={() => toggleGeneration(gen)}
          >
            generation {gen}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
