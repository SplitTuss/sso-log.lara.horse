import { FunnelIcon } from 'lucide-react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';
import { cn } from '@/utils';

interface FilterProps {
  onHideUnavailable: (value: boolean) => void;
  onHideNotOwned: (value: boolean) => void;
}

export const Filter = ({ onHideUnavailable, onHideNotOwned }: FilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-center">
      <button className="hover:cursor-pointer" onClick={toggleExpand}>
        <FunnelIcon className="text-muted-foreground mr-2" size={20} />
      </button>

      <div className={cn('items-center gap-2', !isExpanded && 'hidden')}>
        <div>
          Hide unavailable:
          <Checkbox
            onCheckedChange={(value) => {
              if (value === 'indeterminate') {
                onHideUnavailable(false);
              } else {
                onHideUnavailable(value);
              }
            }}
          />
        </div>

        <div>
          only show owned:
          <Checkbox
            onCheckedChange={(value) => {
              if (value === 'indeterminate') {
                onHideNotOwned(false);
              } else {
                onHideNotOwned(value);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
