import { Checkbox } from './shadcn/Checkbox';
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
  return (
    <div className="text-center">
      <div className="flex sm:flex-row flex-col items-center gap-2">
        <div className="bg-accent-foreground/40 rounded-md">
          <GenerationDropdown
            selectedGens={visibleGenerations}
            onChange={onVisibleGenerationsChange}
          />
        </div>

        <div className="bg-accent-foreground/40 rounded-md">
          <div className="p-1 flex flex-row items-center hover:text-primary">
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
        </div>
        <div className="bg-accent-foreground/40 rounded-md">
          <div className="p-1 flex flex-row items-center hover:text-primary">
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
        </div>
      </div>
    </div>
  );
};
