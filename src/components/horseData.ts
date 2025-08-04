type HorseData = Array<{
  breed: string;
  generations: Array<{
    id: number;
    colors: Array<{
      name: string;
      imageUrl: string;
      ownedBy?: Array<{
        horseName: string;
        ownerName: string;
      }>;
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
          {
            name: 'palomino akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen1-1.webp',
          },
          {
            name: 'buckskin akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen1-2.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-1.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-2.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-3.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-4.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: 'akhal-teke/gen3-5.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: 'akhal-teke/gen3-6.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: 'akhal-teke/gen3-7.webp',
            ownedBy: [
              {
                horseName: 'Tuxedoplay',
                ownerName: 'Julie',
              },
            ],
          },
          {
            name: 'akhal-teke',
            imageUrl: 'akhal-teke/gen3-8.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen1-5.webp',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen2-5.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-10.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-11.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-paint-horse/gen3-12.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen2-7.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-10.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-quarter-horse/gen3-11.webp',
          },
        ],
      },
    ],
  },
  {
    breed: 'American Saddlebred',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Arabian',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Ardennes',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Belgian Warmblood',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Clydesdale',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Connemara',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Criollo',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Curly Horse',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Dartmoor Pony',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Finnhorse',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Galaxy',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Gotland Pony',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Haflinger',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Hannoverian',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Icelandic Horse',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Friesian',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Mountain Horse',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Starter Pony',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Warmblood',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Jorvik Wild Horse',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Knabstrupper',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Lippizzaner',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Lusitano',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Magic Horses',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Mawari',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Mule',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Mustang',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Noriker',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'North Swedish Rune Runner',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Paso Fino',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Percheron',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Pintabian',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Shire',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Soul Steed',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Tennessee Walker',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Trakehner',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
  {
    breed: 'Welsh Pony',
    generations: [
      {
        id: 1,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + '',
          },
        ],
      },
    ],
  },
];
