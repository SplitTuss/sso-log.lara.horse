import { FunnelIcon } from 'lucide-react';
import { Checkbox } from './Checkbox';

interface FilterProps {
  onHideUnavailable: (value: boolean) => void;
}

export const Filter = ({ onHideUnavailable }: FilterProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <FunnelIcon className="text-muted-foreground mr-2" size={20} />
      </div>

      <div className="flex flex-row items-center gap-2">
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
    </>
  );
};
