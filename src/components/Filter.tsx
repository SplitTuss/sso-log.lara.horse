import { FunnelIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/utils';
import { Checkbox } from './Checkbox';
import { GenerationDropdown } from './GenerationDropdown';

interface FilterProps {
  onHideUnavailable: (value: boolean) => void;
  onHideNotOwned: (value: boolean) => void;
  visibleGenerations: number[];
  onVisibleGenerationsChange: (value: number[]) => void;
}

export const Filter = ({
  onHideUnavailable,
  onHideNotOwned,
  visibleGenerations,
  onVisibleGenerationsChange,
}: FilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-center">
      <button className="hover:cursor-pointer" onClick={toggleExpand}>
        <FunnelIcon className="text-muted-foreground" size={20} />
      </button>

      <div className={cn('flex sm:flex-row flex-col items-center gap-2', !isExpanded && 'hidden')}>
        <div className="flex flex-row items-center">
          hide unavailable
          <Checkbox
            className="ml-1"
            onCheckedChange={(value) => {
              if (value === 'indeterminate') {
                onHideUnavailable(false);
              } else {
                onHideUnavailable(value);
              }
            }}
          />
        </div>
        <div className="flex flex-row items-center ml-2 mr-2">
          only show owned
          <Checkbox
            className="ml-1"
            onCheckedChange={(value) => {
              if (value === 'indeterminate') {
                onHideNotOwned(false);
              } else {
                onHideNotOwned(value);
              }
            }}
          />
        </div>

        <GenerationDropdown
          selectedGens={visibleGenerations}
          onChange={onVisibleGenerationsChange}
        />
      </div>
    </div>
  );
};
