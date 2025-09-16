interface FormatHorseIdArgs {
  breed: string;
  generation: number;
  colorId: number;
}

export const formatHorseId = ({ breed, generation, colorId }: FormatHorseIdArgs) => {
  return `${breed}-gen${generation}-color${colorId}`;
};
