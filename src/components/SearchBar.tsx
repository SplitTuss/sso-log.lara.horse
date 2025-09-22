import { Input } from './Input';
import { SearchIcon } from 'lucide-react';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto pb-4">
      <Input placeholder="search breed..." onChange={(e) => onSearchChange(e.target.value)}>
        <SearchIcon className="text-muted-foreground mt-2 mr-2" size={20} />
      </Input>
    </div>
  );
};
