import { Input } from './Input';

interface SearchBarProps {
  onSearchChange: (value: string) => void;
}

export const SearchBar = ({ onSearchChange }: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto pb-4">
      <Input placeholder="search" onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
};
