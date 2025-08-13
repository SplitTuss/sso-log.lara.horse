type HorseData = Array<{
  breed: string;
  generations: Array<{
    id: number;
    colors: Array<{
      imageUrl: string;
    }>;
  }>;
}>;

const IMAGE_URL_PREFIX = 'https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/';

export const HORSE_DATA: HorseData = [
  {
    breed: 'Akhal-Teke',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen1-2.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'American Paint Horse',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-5.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-5.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-11.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-12.webp' },
        ],
      },
    ],
  },
  {
    breed: 'American Quarter Horse',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'American Saddlebred',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Andalusian',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-6.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Appaloosa',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen1-2.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen2-2.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Arabian',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Arabian Thoroughbred',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-9.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-6.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Ardennes',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Belgian Warmblood',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-11.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-12.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Chincoteague Pony',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen1-3.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Clydesdale',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Connemara',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Criollo',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Curly Horse',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Danish Warmblood',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'danish-warmblood/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'danish-warmblood/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'danish-warmblood/gen1-3.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Dartmoor Pony',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Dutch Warmblood',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen1-3.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'English Thoroughbred',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen1-3.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Finnhorse',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Fjord Horse',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-7.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Friesian Horse',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen1-3.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen2-3.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Friesian Sport Horse',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen1-3.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-6.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen3-3.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Galaxy',
    generations: [
      {
        id: 3,
        colors: [{ imageUrl: IMAGE_URL_PREFIX + 'galaxy/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Gotland Pony',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Haflinger',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Hannoverian',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-6.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Icelandic Horse',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-10.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Irish Cob',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-6.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Friesian',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-friesian/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Mountain Horse',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-mountain-horse/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Pony',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-11.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-12.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-13.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-pony/gen1-14.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Starter Pony',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-starterpony/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Warmblood',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-warmblood/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Wild Horse',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'jorvik-wild-horse/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Knabstrupper',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'knabstrupper/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Lippizzaner',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lippizzaner/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Lusitano',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'lusitano/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Magic Horses',
    generations: [
      {
        id: 2.1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/whinfell/gen2-7.webp' },
        ],
      },
      {
        id: 2.2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/nixie/gen2-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/nixie/gen2-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/nixie/gen2-10.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/adura.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/aldrach.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/alvirah.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/antheia.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/ayla.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/barkhart.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/barkhart2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/birkir.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/bolt.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/brinicle.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/bronte.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/calder.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/calliope.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/dorcha.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/duskgrim.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/earik.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/ephyra.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/erinys.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/faramawr.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/fawncy.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/hanami.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/heidrun.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/hemera.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/hjortensia.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/kampos.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/katur.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/keima.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/laverna.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/lebkuchen.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/luna.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/monarch.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/nemain.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/pepita.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/petra.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/phoebe.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/prisma.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/proteus.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/ryume.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/sedna.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/serenus.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/shadowshield.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/snowdancer.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/solas.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/songsorrow.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/sylvian unicorn.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/tellina.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/tenebri.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/tombhoof.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/tynan.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/umbra.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/vega.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/zony.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/vetle.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'magic-horses/gen3/woodear.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Mawari',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mawari/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Morgan',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen1-4.webp' },
        ],
      },
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen2-9.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'morgan/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Mule',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mule/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Mustang',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen2-11.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-10.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'mustang/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Noriker',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'noriker/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'North Swedish Horse',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen1-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen1-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen1-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen1-6.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'north-swedish-horse/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'North Swedish Rune Runner',
    generations: [
      {
        id: 3,
        colors: [{ imageUrl: IMAGE_URL_PREFIX + 'north-swedish-rune-runner/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Oldenburg',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'oldenburg/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'oldenburg/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'oldenburg/gen1-3.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Paso Fino',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'paso-fino/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Percheron',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'percheron/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Pintabian',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen2-6.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'pintabian/gen3-6.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Selle Français',
    generations: [
      {
        id: 1,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen1-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen1-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen1-3.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'selle-français/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Shire',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen2-8.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-9webp.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'shire/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Soul Steed',
    generations: [
      {
        id: 3,
        colors: [{ imageUrl: IMAGE_URL_PREFIX + 'soul-steed/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Spirit',
    generations: [
      {
        id: 2,
        colors: [{ imageUrl: IMAGE_URL_PREFIX + 'spirit/gen2-1.webp' }],
      },
    ],
  },
  {
    breed: 'Super Shire',
    generations: [
      {
        id: 3,
        colors: [{ imageUrl: IMAGE_URL_PREFIX + 'super-shire/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Tennessee Walker',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'tennessee-walker/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Trakehner',
    generations: [
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'trakehner/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Welsh Pony',
    generations: [
      {
        id: 2,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        colors: [
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-1.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-2.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-3.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-4.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-5.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-6.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-7.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-8.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-9.webp' },
          { imageUrl: IMAGE_URL_PREFIX + 'welsh-pony/gen3-10.webp' },
        ],
      },
    ],
  },
];
