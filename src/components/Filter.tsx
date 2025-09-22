import { FunnelIcon } from 'lucide-react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';
import { cn } from '@/utils';
import { MultiSelect } from './MultiSelect';

interface FilterProps {
  onHideUnavailable: (value: boolean) => void;
  onHideNotOwned: (value: boolean) => void;
  gens: number[];
  onGensChange: (next: number[]) => void;
}

export const Filter = ({ onHideUnavailable, onHideNotOwned, gens, onGensChange }: FilterProps) => {
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
        <div>
          <div>
            hide unavailable:
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
          <div>
            only show owned:
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
        </div>
        <div>
          <MultiSelect
            options={[
              { label: 'generation 1', value: 1 },
              { label: 'generation 2', value: 2 },
              { label: 'generation 3', value: 3 },
            ]}
            value={gens}
            onChange={onGensChange}
            placeholder="generations"
            className="mb-2"
          />
        </div>
      </div>
    </div>
  );
};
