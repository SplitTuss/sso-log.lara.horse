import { FunnelIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/utils';
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
      {/* <FunnelIcon className="text-muted-foreground" size={20} /> */}
      <div className="flex sm:flex-row flex-col items-center gap-2">
        <GenerationDropdown
          selectedGens={visibleGenerations}
          onChange={onVisibleGenerationsChange}
        />

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
      </div>
    </div>
  );
};
