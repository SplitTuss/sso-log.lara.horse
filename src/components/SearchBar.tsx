import { Input } from './shadcn/Input';
import { SearchIcon } from 'lucide-react';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className="max-w-md m-2 mx-auto bg-accent-foreground/40 rounded-md">
      <Input
        className="placeholder:text-accent"
        placeholder="search breed..."
        onChange={(e) => onSearchChange(e.target.value)}
      >
        <SearchIcon className="text-accent mt-2 mr-2" size={20} />
      </Input>
    </div>
  );
};
