import { Checkbox } from './shadcn/Checkbox';
import { GenerationDropdown } from './GenerationDropdown';
import { MapPinOffIcon, StarIcon, UserCheckIcon } from 'lucide-react';

interface FilterProps {
  onHideUnavailable: (value: boolean) => void;
  onHideNotOwned: (value: boolean) => void;
  visibleGenerations: number[];
  onVisibleGenerationsChange: (value: number[]) => void;
  onShowFavorited: (value: boolean) => void;
}

export const Filter = ({
  onHideUnavailable,
  onHideNotOwned,
  visibleGenerations,
  onVisibleGenerationsChange,
  onShowFavorited,
}: FilterProps) => {
  return (
    <div className="flex flex-col text-md items-center gap-2">
      <div className="bg-accent-foreground/40 rounded-md">
        <GenerationDropdown
          selectedGens={visibleGenerations}
          onChange={onVisibleGenerationsChange}
        />
      </div>

      <div className="bg-accent-foreground/40 rounded-md">
        <div className="p-2 w-50 flex flex-row items-center justify-end hover:text-primary">
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
          <MapPinOffIcon size={16} className="ml-1" />
        </div>
      </div>
      <div className="bg-accent-foreground/40 rounded-md">
        <div className="p-2 w-50 flex flex-row items-center justify-end hover:text-primary">
          show favorites only:
          <Checkbox
            className="ml-1"
            onCheckedChange={(value) => {
              if (value === 'indeterminate') {
                onShowFavorited(false);
              } else {
                onShowFavorited(value);
              }
            }}
          />
          <StarIcon size={16} className="ml-1" />
        </div>
      </div>
      <div className="bg-accent-foreground/40 rounded-md">
        <div className="p-2 w-50 flex flex-row items-center justify-end hover:text-primary">
          show owned only:
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
          <UserCheckIcon size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};
