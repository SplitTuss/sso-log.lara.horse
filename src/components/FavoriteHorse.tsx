import { useDb } from '@/data/DbProvider';
import { StarIcon } from 'lucide-react';

interface FavoriteHorseProps {
  horseId: string;
}

export default function FavoriteHorse({ horseId }: FavoriteHorseProps) {
  const { addFavorite, removeFavorite, favorites } = useDb();

  const isFavorited = favorites?.includes(horseId);

  const toggleFavorite = async () => {
    if (isFavorited) {
      await removeFavorite(horseId);
    } else {
      await addFavorite(horseId);
    }
  };

  return (
    <button className="hover:cursor-pointer" onClick={toggleFavorite}>
      <StarIcon className={isFavorited ? 'fill-white' : 'fill-none'} />
    </button>
  );
}
