type Color = {
  imageUrl: string;
};

type HorseData<ColorType = Color> = Array<{
  breed: string;
  generations: Array<{
    id: number;
    forSale: boolean;
    colors: Array<ColorType>;
  }>;
}>;

const IMAGE_URL_PREFIX = 'https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/';

//next horses to go: gen 1 Jorvik Pony on Jan.07. (last updated oct.22)
//last horse deleted: Icelandic horse gen2, Shire gen 2 on oct.15.

/* eslint-disable prettier/prettier */
const HORSE_DATA: HorseData = [
  {
    breed: 'Akhal-Teke',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'akhal-teke/gen1-1.webp' },
          { imageUrl: 'akhal-teke/gen1-2.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'akhal-teke/gen3-1.webp' },
          { imageUrl: 'akhal-teke/gen3-2.webp' },
          { imageUrl: 'akhal-teke/gen3-3.webp' },
          { imageUrl: 'akhal-teke/gen3-4.webp' },
          { imageUrl: 'akhal-teke/gen3-5.webp' },
          { imageUrl: 'akhal-teke/gen3-6.webp' },
          { imageUrl: 'akhal-teke/gen3-7.webp' },
          { imageUrl: 'akhal-teke/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'American Paint Horse',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'american-paint-horse/gen1-1.webp' },
          { imageUrl: 'american-paint-horse/gen1-2.webp' },
          { imageUrl: 'american-paint-horse/gen1-3.webp' },
          { imageUrl: 'american-paint-horse/gen1-4.webp' },
          { imageUrl: 'american-paint-horse/gen1-5.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'american-paint-horse/gen2-1.webp' },
          { imageUrl: 'american-paint-horse/gen2-2.webp' },
          { imageUrl: 'american-paint-horse/gen2-3.webp' },
          { imageUrl: 'american-paint-horse/gen2-4.webp' },
          { imageUrl: 'american-paint-horse/gen2-5.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'american-paint-horse/gen3-1.webp' },
          { imageUrl: 'american-paint-horse/gen3-2.webp' },
          { imageUrl: 'american-paint-horse/gen3-3.webp' },
          { imageUrl: 'american-paint-horse/gen3-4.webp' },
          { imageUrl: 'american-paint-horse/gen3-5.webp' },
          { imageUrl: 'american-paint-horse/gen3-6.webp' },
          { imageUrl: 'american-paint-horse/gen3-7.webp' },
          { imageUrl: 'american-paint-horse/gen3-8.webp' },
          { imageUrl: 'american-paint-horse/gen3-9.webp' },
          { imageUrl: 'american-paint-horse/gen3-10.webp' },
          { imageUrl: 'american-paint-horse/gen3-11.webp' },
          { imageUrl: 'american-paint-horse/gen3-12.webp' },
        ],
      },
    ],
  },
  {
    breed: 'American Quarter Horse',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'american-quarter-horse/gen2-1.webp' },
          { imageUrl: 'american-quarter-horse/gen2-2.webp' },
          { imageUrl: 'american-quarter-horse/gen2-3.webp' },
          { imageUrl: 'american-quarter-horse/gen2-4.webp' },
          { imageUrl: 'american-quarter-horse/gen2-5.webp' },
          { imageUrl: 'american-quarter-horse/gen2-6.webp' },
          { imageUrl: 'american-quarter-horse/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'american-quarter-horse/gen3-1.webp' },
          { imageUrl: 'american-quarter-horse/gen3-2.webp' },
          { imageUrl: 'american-quarter-horse/gen3-3.webp' },
          { imageUrl: 'american-quarter-horse/gen3-4.webp' },
          { imageUrl: 'american-quarter-horse/gen3-5.webp' },
          { imageUrl: 'american-quarter-horse/gen3-6.webp' },
          { imageUrl: 'american-quarter-horse/gen3-7.webp' },
          { imageUrl: 'american-quarter-horse/gen3-8.webp' },
          { imageUrl: 'american-quarter-horse/gen3-9.webp' },
          { imageUrl: 'american-quarter-horse/gen3-10.webp' },
          { imageUrl: 'american-quarter-horse/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'American Saddlebred',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'american-saddlebred/gen3-1.webp' },
          { imageUrl: 'american-saddlebred/gen3-2.webp' },
          { imageUrl: 'american-saddlebred/gen3-3.webp' },
          { imageUrl: 'american-saddlebred/gen3-4.webp' },
          { imageUrl: 'american-saddlebred/gen3-5.webp' },
          { imageUrl: 'american-saddlebred/gen3-6.webp' },
          { imageUrl: 'american-saddlebred/gen3-7.webp' },
          { imageUrl: 'american-saddlebred/gen3-8.webp' },
          { imageUrl: 'american-saddlebred/gen3-9.webp' },
          { imageUrl: 'american-saddlebred/gen3-10.webp' },
          { imageUrl: 'american-saddlebred/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Andalusian',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'andalusian/gen1-1.webp' },
          { imageUrl: 'andalusian/gen1-2.webp' },
          { imageUrl: 'andalusian/gen1-3.webp' },
          { imageUrl: 'andalusian/gen1-4.webp' },
          { imageUrl: 'andalusian/gen1-5.webp' },
          { imageUrl: 'andalusian/gen1-6.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'andalusian/gen3-1.webp' },
          { imageUrl: 'andalusian/gen3-2.webp' },
          { imageUrl: 'andalusian/gen3-3.webp' },
          { imageUrl: 'andalusian/gen3-4.webp' },
          { imageUrl: 'andalusian/gen3-5.webp' },
          { imageUrl: 'andalusian/gen3-6.webp' },
          { imageUrl: 'andalusian/gen3-7.webp' },
          { imageUrl: 'andalusian/gen3-8.webp' },
          { imageUrl: 'andalusian/gen3-9.png' },
          { imageUrl: 'andalusian/gen3-10.png' },
          { imageUrl: 'andalusian/gen3-11.png' },
          { imageUrl: 'andalusian/gen3-12.png' },
          { imageUrl: 'andalusian/gen3-13.png' },
          { imageUrl: 'andalusian/gen3-14.png' },
          { imageUrl: 'andalusian/gen3-15.png' },
        ],
      },
    ],
  },
  {
    breed: 'Appaloosa',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'appaloosa/gen1-1.webp' },
          { imageUrl: 'appaloosa/gen1-2.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'appaloosa/gen2-1.webp' },
          { imageUrl: 'appaloosa/gen2-2.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'appaloosa/gen3-1.webp' },
          { imageUrl: 'appaloosa/gen3-2.webp' },
          { imageUrl: 'appaloosa/gen3-3.webp' },
          { imageUrl: 'appaloosa/gen3-4.webp' },
          { imageUrl: 'appaloosa/gen3-5.webp' },
          { imageUrl: 'appaloosa/gen3-6.webp' },
          { imageUrl: 'appaloosa/gen3-7.webp' },
          { imageUrl: 'appaloosa/gen3-8.webp' },
          { imageUrl: 'appaloosa/gen3-9.webp' },
          { imageUrl: 'appaloosa/gen3-10.webp' },
          { imageUrl: 'appaloosa/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Arabian',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'arabian/gen3-1.webp' },
          { imageUrl: 'arabian/gen3-2.webp' },
          { imageUrl: 'arabian/gen3-3.webp' },
          { imageUrl: 'arabian/gen3-4.webp' },
          { imageUrl: 'arabian/gen3-5.webp' },
          { imageUrl: 'arabian/gen3-6.webp' },
          { imageUrl: 'arabian/gen3-7.webp' },
          { imageUrl: 'arabian/gen3-8.webp' },
          { imageUrl: 'arabian/gen3-9.webp' },
          { imageUrl: 'arabian/gen3-10.webp' },
          { imageUrl: 'arabian/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Arabian Thoroughbred',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'arabian-thoroughbred/gen1-1.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-2.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-3.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-4.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-5.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-6.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-7.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-8.webp' },
          { imageUrl: 'arabian-thoroughbred/gen1-9.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'arabian-thoroughbred/gen2-1.webp' },
          { imageUrl: 'arabian-thoroughbred/gen2-2.webp' },
          { imageUrl: 'arabian-thoroughbred/gen2-3.webp' },
          { imageUrl: 'arabian-thoroughbred/gen2-4.webp' },
          { imageUrl: 'arabian-thoroughbred/gen2-5.webp' },
          { imageUrl: 'arabian-thoroughbred/gen2-6.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Ardennes',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'ardennes/gen3-1.webp' },
          { imageUrl: 'ardennes/gen3-2.webp' },
          { imageUrl: 'ardennes/gen3-3.webp' },
          { imageUrl: 'ardennes/gen3-4.webp' },
          { imageUrl: 'ardennes/gen3-5.webp' },
          { imageUrl: 'ardennes/gen3-6.webp' },
          { imageUrl: 'ardennes/gen3-7.webp' },
          { imageUrl: 'ardennes/gen3-8.webp' },
          { imageUrl: 'ardennes/gen3-9.webp' },
          { imageUrl: 'ardennes/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Belgian Warmblood',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'belgian-warmblood/gen3-1.webp' },
          { imageUrl: 'belgian-warmblood/gen3-2.webp' },
          { imageUrl: 'belgian-warmblood/gen3-3.webp' },
          { imageUrl: 'belgian-warmblood/gen3-4.webp' },
          { imageUrl: 'belgian-warmblood/gen3-5.webp' },
          { imageUrl: 'belgian-warmblood/gen3-6.webp' },
          { imageUrl: 'belgian-warmblood/gen3-7.webp' },
          { imageUrl: 'belgian-warmblood/gen3-8.webp' },
          { imageUrl: 'belgian-warmblood/gen3-9.webp' },
          { imageUrl: 'belgian-warmblood/gen3-10.webp' },
          { imageUrl: 'belgian-warmblood/gen3-11.webp' },
          { imageUrl: 'belgian-warmblood/gen3-12.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Chincoteague Pony',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'chincoteague-pony/gen1-1.webp' },
          { imageUrl: 'chincoteague-pony/gen1-2.webp' },
          { imageUrl: 'chincoteague-pony/gen1-3.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'chincoteague-pony/gen3-1.webp' },
          { imageUrl: 'chincoteague-pony/gen3-2.webp' },
          { imageUrl: 'chincoteague-pony/gen3-3.webp' },
          { imageUrl: 'chincoteague-pony/gen3-4.webp' },
          { imageUrl: 'chincoteague-pony/gen3-5.webp' },
          { imageUrl: 'chincoteague-pony/gen3-6.webp' },
          { imageUrl: 'chincoteague-pony/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Clydesdale',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'clydesdale/gen3-1.webp' },
          { imageUrl: 'clydesdale/gen3-2.webp' },
          { imageUrl: 'clydesdale/gen3-3.webp' },
          { imageUrl: 'clydesdale/gen3-4.webp' },
          { imageUrl: 'clydesdale/gen3-5.webp' },
          { imageUrl: 'clydesdale/gen3-6.webp' },
          { imageUrl: 'clydesdale/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Connemara',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'connemara/gen3-1.webp' },
          { imageUrl: 'connemara/gen3-2.webp' },
          { imageUrl: 'connemara/gen3-3.webp' },
          { imageUrl: 'connemara/gen3-4.webp' },
          { imageUrl: 'connemara/gen3-5.webp' },
          { imageUrl: 'connemara/gen3-6.webp' },
          { imageUrl: 'connemara/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Criollo',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'criollo/gen3-1.webp' },
          { imageUrl: 'criollo/gen3-2.webp' },
          { imageUrl: 'criollo/gen3-3.webp' },
          { imageUrl: 'criollo/gen3-4.webp' },
          { imageUrl: 'criollo/gen3-5.webp' },
          { imageUrl: 'criollo/gen3-6.webp' },
          { imageUrl: 'criollo/gen3-7.webp' },
          { imageUrl: 'criollo/gen3-8.webp' },
          { imageUrl: 'criollo/gen3-9.webp' },
          { imageUrl: 'criollo/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Curly Horse',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'curly-horse/gen3-1.webp' },
          { imageUrl: 'curly-horse/gen3-2.webp' },
          { imageUrl: 'curly-horse/gen3-3.webp' },
          { imageUrl: 'curly-horse/gen3-4.webp' },
          { imageUrl: 'curly-horse/gen3-5.webp' },
          { imageUrl: 'curly-horse/gen3-6.webp' },
          { imageUrl: 'curly-horse/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Danish Warmblood',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'danish-warmblood/gen1-1.webp' },
          { imageUrl: 'danish-warmblood/gen1-2.webp' },
          { imageUrl: 'danish-warmblood/gen1-3.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Dartmoor Pony',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'dartmoor-pony/gen3-1.webp' },
          { imageUrl: 'dartmoor-pony/gen3-2.webp' },
          { imageUrl: 'dartmoor-pony/gen3-3.webp' },
          { imageUrl: 'dartmoor-pony/gen3-4.webp' },
          { imageUrl: 'dartmoor-pony/gen3-5.webp' },
          { imageUrl: 'dartmoor-pony/gen3-6.webp' },
          { imageUrl: 'dartmoor-pony/gen3-7.webp' },
          { imageUrl: 'dartmoor-pony/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Dutch Warmblood',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'dutch-warmblood/gen1-1.webp' },
          { imageUrl: 'dutch-warmblood/gen1-2.webp' },
          { imageUrl: 'dutch-warmblood/gen1-3.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'dutch-warmblood/gen3-1.webp' },
          { imageUrl: 'dutch-warmblood/gen3-2.webp' },
          { imageUrl: 'dutch-warmblood/gen3-3.webp' },
          { imageUrl: 'dutch-warmblood/gen3-4.webp' },
          { imageUrl: 'dutch-warmblood/gen3-5.webp' },
          { imageUrl: 'dutch-warmblood/gen3-6.webp' },
          { imageUrl: 'dutch-warmblood/gen3-7.webp' },
          { imageUrl: 'dutch-warmblood/gen3-8.webp' },
          { imageUrl: 'dutch-warmblood/gen3-9.webp' },
          { imageUrl: 'dutch-warmblood/gen3-10.webp' },
          { imageUrl: 'dutch-warmblood/gen3-11.webp' },
          { imageUrl: 'dutch-warmblood/gen3-12.webp' },
        ],
      },
    ],
  },
  {
    breed: 'English Thoroughbred',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'english-thoroughbred/gen1-1.webp' },
          { imageUrl: 'english-thoroughbred/gen1-2.webp' },
          { imageUrl: 'english-thoroughbred/gen1-3.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'english-thoroughbred/gen2-1.webp' },
          { imageUrl: 'english-thoroughbred/gen2-2.webp' },
          { imageUrl: 'english-thoroughbred/gen2-3.webp' },
          { imageUrl: 'english-thoroughbred/gen2-4.webp' },
          { imageUrl: 'english-thoroughbred/gen2-5.webp' },
          { imageUrl: 'english-thoroughbred/gen2-6.webp' },
          { imageUrl: 'english-thoroughbred/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'english-thoroughbred/gen3-1.webp' },
          { imageUrl: 'english-thoroughbred/gen3-2.webp' },
          { imageUrl: 'english-thoroughbred/gen3-3.webp' },
          { imageUrl: 'english-thoroughbred/gen3-4.webp' },
          { imageUrl: 'english-thoroughbred/gen3-5.webp' },
          { imageUrl: 'english-thoroughbred/gen3-6.webp' },
          { imageUrl: 'english-thoroughbred/gen3-7.webp' },
          { imageUrl: 'english-thoroughbred/gen3-8.webp' },
          { imageUrl: 'english-thoroughbred/gen3-9.webp' },
          { imageUrl: 'english-thoroughbred/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Finnhorse',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'finnhorse/gen3-1.webp' },
          { imageUrl: 'finnhorse/gen3-2.webp' },
          { imageUrl: 'finnhorse/gen3-3.webp' },
          { imageUrl: 'finnhorse/gen3-4.webp' },
          { imageUrl: 'finnhorse/gen3-5.webp' },
          { imageUrl: 'finnhorse/gen3-6.webp' },
          { imageUrl: 'finnhorse/gen3-7.webp' },
          { imageUrl: 'finnhorse/gen3-8.webp' },
          { imageUrl: 'finnhorse/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Fjord Horse',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'fjordhorse/gen1-1.webp' },
          { imageUrl: 'fjordhorse/gen1-2.webp' },
          { imageUrl: 'fjordhorse/gen1-3.webp' },
          { imageUrl: 'fjordhorse/gen1-4.webp' },
          { imageUrl: 'fjordhorse/gen1-5.webp' },
          { imageUrl: 'fjordhorse/gen1-6.webp' },
          { imageUrl: 'fjordhorse/gen1-7.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'fjordhorse/gen3-1.webp' },
          { imageUrl: 'fjordhorse/gen3-2.webp' },
          { imageUrl: 'fjordhorse/gen3-3.webp' },
          { imageUrl: 'fjordhorse/gen3-4.webp' },
          { imageUrl: 'fjordhorse/gen3-5.webp' },
          { imageUrl: 'fjordhorse/gen3-6.webp' },
          { imageUrl: 'fjordhorse/gen3-7.webp' },
          { imageUrl: 'fjordhorse/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Friesian Horse',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'friesian-horse/gen1-1.webp' },
          { imageUrl: 'friesian-horse/gen1-2.webp' },
          { imageUrl: 'friesian-horse/gen1-3.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'friesian-horse/gen2-1.webp' },
          { imageUrl: 'friesian-horse/gen2-2.webp' },
          { imageUrl: 'friesian-horse/gen2-3.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'friesian-horse/gen3-1.webp' },
          { imageUrl: 'friesian-horse/gen3-2.webp' },
          { imageUrl: 'friesian-horse/gen3-3.webp' },
          { imageUrl: 'friesian-horse/gen3-4.webp' },
          { imageUrl: 'friesian-horse/gen3-5.webp' },
          { imageUrl: 'friesian-horse/gen3-6.webp' },
          { imageUrl: 'friesian-horse/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Friesian Sport Horse',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'friesian-sport-horse/gen1-1.webp' },
          { imageUrl: 'friesian-sport-horse/gen1-2.webp' },
          { imageUrl: 'friesian-sport-horse/gen1-3.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'friesian-sport-horse/gen2-1.webp' },
          { imageUrl: 'friesian-sport-horse/gen2-2.webp' },
          { imageUrl: 'friesian-sport-horse/gen2-3.webp' },
          { imageUrl: 'friesian-sport-horse/gen2-4.webp' },
          { imageUrl: 'friesian-sport-horse/gen2-5.webp' },
          { imageUrl: 'friesian-sport-horse/gen2-6.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'friesian-sport-horse/gen3-1.webp' },
          { imageUrl: 'friesian-sport-horse/gen3-2.webp' },
          { imageUrl: 'friesian-sport-horse/gen3-3.webp' },
          { imageUrl: 'friesian-sport-horse/gen3-4.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Galaxy',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [{ imageUrl: 'galaxy/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Gotland Pony',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'gotland-pony/gen3-1.webp' },
          { imageUrl: 'gotland-pony/gen3-2.webp' },
          { imageUrl: 'gotland-pony/gen3-3.webp' },
          { imageUrl: 'gotland-pony/gen3-4.webp' },
          { imageUrl: 'gotland-pony/gen3-5.webp' },
          { imageUrl: 'gotland-pony/gen3-6.webp' },
          { imageUrl: 'gotland-pony/gen3-7.webp' },
          { imageUrl: 'gotland-pony/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Haflinger',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'haflinger/gen2-1.webp' },
          { imageUrl: 'haflinger/gen2-2.webp' },
          { imageUrl: 'haflinger/gen2-3.webp' },
          { imageUrl: 'haflinger/gen2-4.webp' },
          { imageUrl: 'haflinger/gen2-5.webp' },
          { imageUrl: 'haflinger/gen2-6.webp' },
          { imageUrl: 'haflinger/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'haflinger/gen3-1.webp' },
          { imageUrl: 'haflinger/gen3-2.webp' },
          { imageUrl: 'haflinger/gen3-3.webp' },
          { imageUrl: 'haflinger/gen3-4.webp' },
          { imageUrl: 'haflinger/gen3-5.webp' },
          { imageUrl: 'haflinger/gen3-6.webp' },
          { imageUrl: 'haflinger/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Hannoverian',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'hannoverian/gen2-1.webp' },
          { imageUrl: 'hannoverian/gen2-2.webp' },
          { imageUrl: 'hannoverian/gen2-3.webp' },
          { imageUrl: 'hannoverian/gen2-4.webp' },
          { imageUrl: 'hannoverian/gen2-5.webp' },
          { imageUrl: 'hannoverian/gen2-6.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'hannoverian/gen3-1.webp' },
          { imageUrl: 'hannoverian/gen3-2.webp' },
          { imageUrl: 'hannoverian/gen3-3.webp' },
          { imageUrl: 'hannoverian/gen3-4.webp' },
          { imageUrl: 'hannoverian/gen3-5.webp' },
          { imageUrl: 'hannoverian/gen3-6.webp' },
          { imageUrl: 'hannoverian/gen3-7.webp' },
          { imageUrl: 'hannoverian/gen3-8.webp' },
          { imageUrl: 'hannoverian/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Icelandic Horse',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'icelandic-horse/gen2-1.webp' },
          { imageUrl: 'icelandic-horse/gen2-2.webp' },
          { imageUrl: 'icelandic-horse/gen2-3.webp' },
          { imageUrl: 'icelandic-horse/gen2-4.webp' },
          { imageUrl: 'icelandic-horse/gen2-5.webp' },
          { imageUrl: 'icelandic-horse/gen2-6.webp' },
          { imageUrl: 'icelandic-horse/gen2-7.webp' },
          { imageUrl: 'icelandic-horse/gen2-8.webp' },
          { imageUrl: 'icelandic-horse/gen2-9.webp' },
          { imageUrl: 'icelandic-horse/gen2-10.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'icelandic-horse/gen3-1.webp' },
          { imageUrl: 'icelandic-horse/gen3-2.webp' },
          { imageUrl: 'icelandic-horse/gen3-3.webp' },
          { imageUrl: 'icelandic-horse/gen3-4.webp' },
          { imageUrl: 'icelandic-horse/gen3-5.webp' },
          { imageUrl: 'icelandic-horse/gen3-6.webp' },
          { imageUrl: 'icelandic-horse/gen3-7.webp' },
          { imageUrl: 'icelandic-horse/gen3-8.webp' },
          { imageUrl: 'icelandic-horse/gen3-9.webp' },
          { imageUrl: 'icelandic-horse/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Irish Cob',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'irish-cob/gen1-1.webp' },
          { imageUrl: 'irish-cob/gen1-2.webp' },
          { imageUrl: 'irish-cob/gen1-3.webp' },
          { imageUrl: 'irish-cob/gen1-4.webp' },
          { imageUrl: 'irish-cob/gen1-5.webp' },
          { imageUrl: 'irish-cob/gen1-6.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'irish-cob/gen3-1.webp' },
          { imageUrl: 'irish-cob/gen3-2.webp' },
          { imageUrl: 'irish-cob/gen3-3.webp' },
          { imageUrl: 'irish-cob/gen3-4.webp' },
          { imageUrl: 'irish-cob/gen3-5.webp' },
          { imageUrl: 'irish-cob/gen3-6.webp' },
          { imageUrl: 'irish-cob/gen3-7.webp' },
          { imageUrl: 'irish-cob/gen3-8.webp' },
          { imageUrl: 'irish-cob/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Friesian',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'jorvik-friesian/gen3-1.webp' },
          { imageUrl: 'jorvik-friesian/gen3-2.webp' },
          { imageUrl: 'jorvik-friesian/gen3-3.webp' },
          { imageUrl: 'jorvik-friesian/gen3-4.webp' },
          { imageUrl: 'jorvik-friesian/gen3-5.webp' },
          { imageUrl: 'jorvik-friesian/gen3-6.webp' },
          { imageUrl: 'jorvik-friesian/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Mountain Horse',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'jorvik-mountain-horse/gen3-1.webp' },
          { imageUrl: 'jorvik-mountain-horse/gen3-2.webp' },
          { imageUrl: 'jorvik-mountain-horse/gen3-3.webp' },
          { imageUrl: 'jorvik-mountain-horse/gen3-4.webp' },
          { imageUrl: 'jorvik-mountain-horse/gen3-5.webp' },
          { imageUrl: 'jorvik-mountain-horse/gen3-6.webp' },
          { imageUrl: 'jorvik-mountain-horse/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Pony',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'jorvik-pony/gen1-1.webp' },
          { imageUrl: 'jorvik-pony/gen1-2.webp' },
          { imageUrl: 'jorvik-pony/gen1-3.webp' },
          { imageUrl: 'jorvik-pony/gen1-4.webp' },
          { imageUrl: 'jorvik-pony/gen1-5.webp' },
          { imageUrl: 'jorvik-pony/gen1-6.webp' },
          { imageUrl: 'jorvik-pony/gen1-7.webp' },
          { imageUrl: 'jorvik-pony/gen1-8.webp' },
          { imageUrl: 'jorvik-pony/gen1-9.webp' },
          { imageUrl: 'jorvik-pony/gen1-10.webp' },
          { imageUrl: 'jorvik-pony/gen1-11.webp' },
          { imageUrl: 'jorvik-pony/gen1-12.webp' },
          { imageUrl: 'jorvik-pony/gen1-13.webp' },
          { imageUrl: 'jorvik-pony/gen1-14.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Starter Pony',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'jorvik-starterpony/gen3-1.webp' },
          { imageUrl: 'jorvik-starterpony/gen3-2.webp' },
          { imageUrl: 'jorvik-starterpony/gen3-3.webp' },
          { imageUrl: 'jorvik-starterpony/gen3-4.webp' },
          { imageUrl: 'jorvik-starterpony/gen3-5.webp' },
          { imageUrl: 'jorvik-starterpony/gen3-6.webp' },
          { imageUrl: 'jorvik-starterpony/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Warmblood',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'jorvik-warmblood/gen3-1.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-2.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-3.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-4.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-5.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-6.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-7.webp' },
          { imageUrl: 'jorvik-warmblood/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Wild Horse',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'jorvik-wild-horse/gen3-1.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-2.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-3.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-4.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-5.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-6.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-7.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-8.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-9.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-10.webp' },
          { imageUrl: 'jorvik-wild-horse/gen3-11.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Knabstrupper',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'knabstrupper/gen3-1.webp' },
          { imageUrl: 'knabstrupper/gen3-2.webp' },
          { imageUrl: 'knabstrupper/gen3-3.webp' },
          { imageUrl: 'knabstrupper/gen3-4.webp' },
          { imageUrl: 'knabstrupper/gen3-5.webp' },
          { imageUrl: 'knabstrupper/gen3-6.webp' },
          { imageUrl: 'knabstrupper/gen3-7.webp' },
          { imageUrl: 'knabstrupper/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Lippizzaner',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'lippizzaner/gen2-1.webp' },
          { imageUrl: 'lippizzaner/gen2-2.webp' },
          { imageUrl: 'lippizzaner/gen2-3.webp' },
          { imageUrl: 'lippizzaner/gen2-4.webp' },
          { imageUrl: 'lippizzaner/gen2-5.webp' },
          { imageUrl: 'lippizzaner/gen2-6.webp' },
          { imageUrl: 'lippizzaner/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'lippizzaner/gen3-1.webp' },
          { imageUrl: 'lippizzaner/gen3-2.webp' },
          { imageUrl: 'lippizzaner/gen3-3.webp' },
          { imageUrl: 'lippizzaner/gen3-4.webp' },
          { imageUrl: 'lippizzaner/gen3-5.webp' },
          { imageUrl: 'lippizzaner/gen3-6.webp' },
          { imageUrl: 'lippizzaner/gen3-7.webp' },
          { imageUrl: 'lippizzaner/gen3-8.webp' },
          { imageUrl: 'lippizzaner/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Lusitano',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'lusitano/gen3-1.webp' },
          { imageUrl: 'lusitano/gen3-2.webp' },
          { imageUrl: 'lusitano/gen3-3.webp' },
          { imageUrl: 'lusitano/gen3-4.webp' },
          { imageUrl: 'lusitano/gen3-5.webp' },
          { imageUrl: 'lusitano/gen3-6.webp' },
          { imageUrl: 'lusitano/gen3-7.webp' },
          { imageUrl: 'lusitano/gen3-8.webp' },
          { imageUrl: 'lusitano/gen3-9.webp' },
          { imageUrl: 'lusitano/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Magic Horses',
    generations: [
      {
        id: 2.1,
        forSale: false,
        colors: [
          { imageUrl: 'magic-horses/whinfell/gen2-1.webp' },
          { imageUrl: 'magic-horses/whinfell/gen2-2.webp' },
          { imageUrl: 'magic-horses/whinfell/gen2-3.webp' },
          { imageUrl: 'magic-horses/whinfell/gen2-4.webp' },
          { imageUrl: 'magic-horses/whinfell/gen2-5.webp' },
          { imageUrl: 'magic-horses/whinfell/gen2-6.webp' },
          { imageUrl: 'magic-horses/whinfell/gen2-7.webp' },
        ],
      },
      {
        id: 2.2,
        forSale: false,
        colors: [
          { imageUrl: 'magic-horses/nixie/gen2-8.webp' },
          { imageUrl: 'magic-horses/nixie/gen2-9.webp' },
          { imageUrl: 'magic-horses/nixie/gen2-10.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          //festival related:

          //winter 2018
          { imageUrl: 'magic-horses/gen3/brinicle.webp' },

          //june 2019
          { imageUrl: 'magic-horses/gen3/barkhart.webp' },
          { imageUrl: 'magic-horses/gen3/barkhart2.webp' },
          //halloween 2019
          { imageUrl: 'magic-horses/gen3/pepita.webp' },
          { imageUrl: 'magic-horses/gen3/woodear.webp' },
          //winter 2019
          { imageUrl: 'magic-horses/gen3/heidrun.webp' },
          { imageUrl: 'magic-horses/gen3/fawncy.webp' },

          //march 2020
          { imageUrl: 'magic-horses/gen3/ayla.webp' },
          { imageUrl: 'magic-horses/gen3/umbra.webp' },
          //june 2020
          { imageUrl: 'magic-horses/gen3/kampos.webp' },
          { imageUrl: 'magic-horses/gen3/tellina.webp' },
          //september 2020
          { imageUrl: 'magic-horses/gen3/dorcha.webp' },
          { imageUrl: 'magic-horses/gen3/solas.webp' },
          //halloween 2020
          { imageUrl: 'magic-horses/gen3/tombhoof.webp' },
          //winter 2020??????

          //march 2021
          { imageUrl: 'magic-horses/gen3/erinys.webp' },
          { imageUrl: 'magic-horses/gen3/petra.webp' },
          //august 2021
          { imageUrl: 'magic-horses/gen3/aldrach.webp' },
          { imageUrl: 'magic-horses/gen3/faramawr.webp' },
          //halloween 2021
          { imageUrl: 'magic-horses/gen3/duskgrim.webp' },
          { imageUrl: 'magic-horses/gen3/songsorrow.webp' },
          //winter 2021
          { imageUrl: 'magic-horses/gen3/shadowshield.webp' },
          { imageUrl: 'magic-horses/gen3/snowdancer.webp' },

          //march 2022
          { imageUrl: 'magic-horses/gen3/birkir.webp' },
          { imageUrl: 'magic-horses/gen3/hanami.webp' },
          //june 2022
          { imageUrl: 'magic-horses/gen3/proteus.webp' },
          { imageUrl: 'magic-horses/gen3/sedna.webp' },
          //august 2022
          { imageUrl: 'magic-horses/gen3/antheia.webp' },
          { imageUrl: 'magic-horses/gen3/hemera.webp' },
          //halloween 2022
          { imageUrl: 'magic-horses/gen3/laverna.webp' },
          { imageUrl: 'magic-horses/gen3/nemain.webp' },
          //winter 2022
          { imageUrl: 'magic-horses/gen3/katur.webp' },
          { imageUrl: 'magic-horses/gen3/sylvian unicorn.webp' },

          //march 2023
          { imageUrl: 'magic-horses/gen3/calder.webp' },
          { imageUrl: 'magic-horses/gen3/ephyra.webp' },
          //rainbow festival 2023
          { imageUrl: 'magic-horses/gen3/prisma.webp' },
          { imageUrl: 'magic-horses/gen3/tenebri.webp' },
          //halloween 2023
          { imageUrl: 'magic-horses/gen3/alvirah.webp' },
          { imageUrl: 'magic-horses/gen3/adura.webp' },
          //winter 2023
          { imageUrl: 'magic-horses/gen3/lebkuchen.webp' },
          { imageUrl: 'magic-horses/gen3/vetle.webp' },

          //february 2024
          { imageUrl: 'magic-horses/gen3/phoebe.webp' },
          { imageUrl: 'magic-horses/gen3/tynan.webp' },
          //rainbow festival 2024
          { imageUrl: 'magic-horses/gen3/bronte.webp' },
          { imageUrl: 'magic-horses/gen3/serenus.webp' },
          //halloween 2024
          { imageUrl: 'magic-horses/gen3/bolt.webp' },
          { imageUrl: 'magic-horses/gen3/calliope.webp' },
          //winter 2024
          { imageUrl: 'magic-horses/gen3/earik.webp' },
          { imageUrl: 'magic-horses/gen3/hjortensia.webp' },

          //february 2025
          { imageUrl: 'magic-horses/gen3/keima.webp' },
          { imageUrl: 'magic-horses/gen3/ryume.webp' },
          //june 2025
          { imageUrl: 'magic-horses/gen3/luna.webp' },
          { imageUrl: 'magic-horses/gen3/monarch.webp' },
          //halloween2025?
          { imageUrl: 'magic-horses/gen3/bixbite.webp' },
          { imageUrl: 'magic-horses/gen3/galvatair.webp' },
          //winter 2025?

          //other magic horses:
          { imageUrl: 'magic-horses/gen3/vega.webp' },
          { imageUrl: 'magic-horses/gen3/zony.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Mawari',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'mawari/gen3-1.webp' },
          { imageUrl: 'mawari/gen3-2.webp' },
          { imageUrl: 'mawari/gen3-3.webp' },
          { imageUrl: 'mawari/gen3-4.webp' },
          { imageUrl: 'mawari/gen3-5.webp' },
          { imageUrl: 'mawari/gen3-6.webp' },
          { imageUrl: 'mawari/gen3-7.webp' },
          { imageUrl: 'mawari/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Morab',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'morab/gen1-1.webp' },
          { imageUrl: 'morab/gen1-2.webp' },
          { imageUrl: 'morab/gen1-3.webp' },
          { imageUrl: 'morab/gen1-4.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Morgan',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'morgan/gen1-1.webp' },
          { imageUrl: 'morgan/gen1-2.webp' },
          { imageUrl: 'morgan/gen1-3.webp' },
          { imageUrl: 'morgan/gen1-4.webp' },
        ],
      },
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'morgan/gen2-1.webp' },
          { imageUrl: 'morgan/gen2-2.webp' },
          { imageUrl: 'morgan/gen2-3.webp' },
          { imageUrl: 'morgan/gen2-4.webp' },
          { imageUrl: 'morgan/gen2-5.webp' },
          { imageUrl: 'morgan/gen2-6.webp' },
          { imageUrl: 'morgan/gen2-7.webp' },
          { imageUrl: 'morgan/gen2-8.webp' },
          { imageUrl: 'morgan/gen2-9.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'morgan/gen3-1.webp' },
          { imageUrl: 'morgan/gen3-2.webp' },
          { imageUrl: 'morgan/gen3-3.webp' },
          { imageUrl: 'morgan/gen3-4.webp' },
          { imageUrl: 'morgan/gen3-5.webp' },
          { imageUrl: 'morgan/gen3-6.webp' },
          { imageUrl: 'morgan/gen3-7.webp' },
          { imageUrl: 'morgan/gen3-8.webp' },
          { imageUrl: 'morgan/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Mule',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'mule/gen3-1.webp' },
          { imageUrl: 'mule/gen3-2.webp' },
          { imageUrl: 'mule/gen3-3.webp' },
          { imageUrl: 'mule/gen3-4.webp' },
          { imageUrl: 'mule/gen3-5.webp' },
          { imageUrl: 'mule/gen3-6.webp' },
          { imageUrl: 'mule/gen3-7.webp' },
          { imageUrl: 'mule/gen3-8.webp' },
          { imageUrl: 'mule/gen3-9.webp' },
          { imageUrl: 'mule/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Mustang',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'mustang/gen2-1.webp' },
          { imageUrl: 'mustang/gen2-2.webp' },
          { imageUrl: 'mustang/gen2-3.webp' },
          { imageUrl: 'mustang/gen2-4.webp' },
          { imageUrl: 'mustang/gen2-5.webp' },
          { imageUrl: 'mustang/gen2-6.webp' },
          { imageUrl: 'mustang/gen2-7.webp' },
          { imageUrl: 'mustang/gen2-8.webp' },
          { imageUrl: 'mustang/gen2-9.webp' },
          { imageUrl: 'mustang/gen2-10.webp' },
          { imageUrl: 'mustang/gen2-11.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'mustang/gen3-1.webp' },
          { imageUrl: 'mustang/gen3-2.webp' },
          { imageUrl: 'mustang/gen3-3.webp' },
          { imageUrl: 'mustang/gen3-4.webp' },
          { imageUrl: 'mustang/gen3-5.webp' },
          { imageUrl: 'mustang/gen3-6.webp' },
          { imageUrl: 'mustang/gen3-7.webp' },
          { imageUrl: 'mustang/gen3-8.webp' },
          { imageUrl: 'mustang/gen3-9.webp' },
          { imageUrl: 'mustang/gen3-10.webp' },
          { imageUrl: 'mustang/gen3-11.webp' },
          { imageUrl: 'mustang/gen3-12.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Noriker',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'noriker/gen3-1.webp' },
          { imageUrl: 'noriker/gen3-2.webp' },
          { imageUrl: 'noriker/gen3-3.webp' },
          { imageUrl: 'noriker/gen3-4.webp' },
          { imageUrl: 'noriker/gen3-5.webp' },
          { imageUrl: 'noriker/gen3-6.webp' },
          { imageUrl: 'noriker/gen3-7.webp' },
          { imageUrl: 'noriker/gen3-8.webp' },
          { imageUrl: 'noriker/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'North Swedish Horse',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'north-swedish-horse/gen1-1.webp' },
          { imageUrl: 'north-swedish-horse/gen1-2.webp' },
          { imageUrl: 'north-swedish-horse/gen1-3.webp' },
          { imageUrl: 'north-swedish-horse/gen1-4.webp' },
          { imageUrl: 'north-swedish-horse/gen1-5.webp' },
          { imageUrl: 'north-swedish-horse/gen1-6.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'north-swedish-horse/gen3-1.webp' },
          { imageUrl: 'north-swedish-horse/gen3-2.webp' },
          { imageUrl: 'north-swedish-horse/gen3-3.webp' },
          { imageUrl: 'north-swedish-horse/gen3-4.webp' },
          { imageUrl: 'north-swedish-horse/gen3-5.webp' },
          { imageUrl: 'north-swedish-horse/gen3-6.webp' },
          { imageUrl: 'north-swedish-horse/gen3-7.webp' },
          { imageUrl: 'north-swedish-horse/gen3-8.webp' },
        ],
      },
    ],
  },
  {
    breed: 'North Swedish Rune Runner',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [{ imageUrl: 'north-swedish-rune-runner/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Oldenburg',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'oldenburg/gen1-1.webp' },
          { imageUrl: 'oldenburg/gen1-2.webp' },
          { imageUrl: 'oldenburg/gen1-3.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Paso Fino',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'paso-fino/gen3-1.webp' },
          { imageUrl: 'paso-fino/gen3-2.webp' },
          { imageUrl: 'paso-fino/gen3-3.webp' },
          { imageUrl: 'paso-fino/gen3-4.webp' },
          { imageUrl: 'paso-fino/gen3-5.webp' },
          { imageUrl: 'paso-fino/gen3-6.webp' },
          { imageUrl: 'paso-fino/gen3-7.webp' },
          { imageUrl: 'paso-fino/gen3-8.webp' },
          { imageUrl: 'paso-fino/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Percheron',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'percheron/gen3-1.webp' },
          { imageUrl: 'percheron/gen3-2.webp' },
          { imageUrl: 'percheron/gen3-3.webp' },
          { imageUrl: 'percheron/gen3-4.webp' },
          { imageUrl: 'percheron/gen3-5.webp' },
          { imageUrl: 'percheron/gen3-6.webp' },
          { imageUrl: 'percheron/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Pintabian',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'pintabian/gen2-1.webp' },
          { imageUrl: 'pintabian/gen2-2.webp' },
          { imageUrl: 'pintabian/gen2-3.webp' },
          { imageUrl: 'pintabian/gen2-4.webp' },
          { imageUrl: 'pintabian/gen2-5.webp' },
          { imageUrl: 'pintabian/gen2-6.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'pintabian/gen3-1.webp' },
          { imageUrl: 'pintabian/gen3-2.webp' },
          { imageUrl: 'pintabian/gen3-3.webp' },
          { imageUrl: 'pintabian/gen3-4.webp' },
          { imageUrl: 'pintabian/gen3-5.webp' },
          { imageUrl: 'pintabian/gen3-6.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Selle Français',
    generations: [
      {
        id: 1,
        forSale: false,
        colors: [
          { imageUrl: 'selle-français/gen1-1.webp' },
          { imageUrl: 'selle-français/gen1-2.webp' },
          { imageUrl: 'selle-français/gen1-3.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'selle-français/gen3-1.webp' },
          { imageUrl: 'selle-français/gen3-2.webp' },
          { imageUrl: 'selle-français/gen3-3.webp' },
          { imageUrl: 'selle-français/gen3-4.webp' },
          { imageUrl: 'selle-français/gen3-5.webp' },
          { imageUrl: 'selle-français/gen3-6.webp' },
          { imageUrl: 'selle-français/gen3-7.webp' },
          { imageUrl: 'selle-français/gen3-8.webp' },
          { imageUrl: 'selle-français/gen3-9.webp' },
          { imageUrl: 'selle-français/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Shire',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'shire/gen2-1.webp' },
          { imageUrl: 'shire/gen2-2.webp' },
          { imageUrl: 'shire/gen2-3.webp' },
          { imageUrl: 'shire/gen2-4.webp' },
          { imageUrl: 'shire/gen2-5.webp' },
          { imageUrl: 'shire/gen2-6.webp' },
          { imageUrl: 'shire/gen2-7.webp' },
          { imageUrl: 'shire/gen2-8.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'shire/gen3-1.webp' },
          { imageUrl: 'shire/gen3-2.webp' },
          { imageUrl: 'shire/gen3-3.webp' },
          { imageUrl: 'shire/gen3-4.webp' },
          { imageUrl: 'shire/gen3-5.webp' },
          { imageUrl: 'shire/gen3-6.webp' },
          { imageUrl: 'shire/gen3-7.webp' },
          { imageUrl: 'shire/gen3-8.webp' },
          { imageUrl: 'shire/gen3-9webp.webp' },
          { imageUrl: 'shire/gen3-10.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Soul Steed',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [{ imageUrl: 'soul-steed/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Spirit',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [{ imageUrl: 'spirit/gen2-1.webp' }],
      },
    ],
  },
  {
    breed: 'Super Shire',
    generations: [
      {
        id: 3,
        forSale: false,
        colors: [{ imageUrl: 'super-shire/gen3-1.webp' }],
      },
    ],
  },
  {
    breed: 'Tennessee Walker',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'tennessee-walker/gen3-1.webp' },
          { imageUrl: 'tennessee-walker/gen3-2.webp' },
          { imageUrl: 'tennessee-walker/gen3-3.webp' },
          { imageUrl: 'tennessee-walker/gen3-4.webp' },
          { imageUrl: 'tennessee-walker/gen3-5.webp' },
          { imageUrl: 'tennessee-walker/gen3-6.webp' },
          { imageUrl: 'tennessee-walker/gen3-7.webp' },
          { imageUrl: 'tennessee-walker/gen3-8.webp' },
          { imageUrl: 'tennessee-walker/gen3-9.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Trakehner',
    generations: [
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'trakehner/gen3-1.webp' },
          { imageUrl: 'trakehner/gen3-2.webp' },
          { imageUrl: 'trakehner/gen3-3.webp' },
          { imageUrl: 'trakehner/gen3-4.webp' },
          { imageUrl: 'trakehner/gen3-5.webp' },
          { imageUrl: 'trakehner/gen3-6.webp' },
          { imageUrl: 'trakehner/gen3-7.webp' },
        ],
      },
    ],
  },
  {
    breed: 'Welsh Pony',
    generations: [
      {
        id: 2,
        forSale: false,
        colors: [
          { imageUrl: 'welsh-pony/gen2-1.webp' },
          { imageUrl: 'welsh-pony/gen2-2.webp' },
          { imageUrl: 'welsh-pony/gen2-3.webp' },
          { imageUrl: 'welsh-pony/gen2-4.webp' },
          { imageUrl: 'welsh-pony/gen2-5.webp' },
          { imageUrl: 'welsh-pony/gen2-6.webp' },
          { imageUrl: 'welsh-pony/gen2-7.webp' },
        ],
      },
      {
        id: 3,
        forSale: true,
        colors: [
          { imageUrl: 'welsh-pony/gen3-1.webp' },
          { imageUrl: 'welsh-pony/gen3-2.webp' },
          { imageUrl: 'welsh-pony/gen3-3.webp' },
          { imageUrl: 'welsh-pony/gen3-4.webp' },
          { imageUrl: 'welsh-pony/gen3-5.webp' },
          { imageUrl: 'welsh-pony/gen3-6.webp' },
          { imageUrl: 'welsh-pony/gen3-7.webp' },
          { imageUrl: 'welsh-pony/gen3-8.webp' },
          { imageUrl: 'welsh-pony/gen3-9.webp' },
          { imageUrl: 'welsh-pony/gen3-10.webp' },
        ],
      },
    ],
  },
];
/* eslint-enable */

export type FormattedHorseData = HorseData<Color & { colorId: number }>;

export const formattedHorseData: FormattedHorseData = HORSE_DATA.map((horse) => ({
  ...horse,
  generations: horse.generations.map((gen) => ({
    ...gen,
    colors: gen.colors.map((color, index) => ({
      imageUrl: IMAGE_URL_PREFIX + color.imageUrl,
      colorId: index,
    })),
  })),
}));
