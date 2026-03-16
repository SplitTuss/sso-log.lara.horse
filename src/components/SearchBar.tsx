import { Input } from './shadcn/Input';
import { SearchIcon } from 'lucide-react';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className="w-65 sm:w-70 bg-accent-foreground/40 rounded-md">
      <Input
        className="placeholder:text-accent text-md"
        placeholder="search breed..."
        onChange={(e) => onSearchChange(e.target.value)}
      >
        <SearchIcon className="text-accent mt-2 mr-4" size={20} />
      </Input>
    </div>
  );
};
