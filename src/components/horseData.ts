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
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-5.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-6.webp',
          },
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-7.webp',
            ownedBy: [
              {
                horseName: 'Tuxedoplay',
                ownerName: 'Julie',
              },
            ],
          },
          {
            name: 'akhal-teke',
            imageUrl: IMAGE_URL_PREFIX + 'akhal-teke/gen3-8.webp',
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
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'american-saddlebred/gen3-10.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen1-6.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'andalusian/gen3-8.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen1-2.webp',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen2-2.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-10.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'appaloosa/gen3-11.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-10.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian/gen3-11.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen1-9.webp',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'arabian-thoroughbred/gen2-6.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'ardennes/gen3-10.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-10.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-11.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'belgian-warmblood/gen3-12.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen1-3.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'chincoteague-pony/gen3-7.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'clydesdale/gen3-7.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'connemara/gen3-7.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'criollo/gen3-9.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'curly-horse/gen3-7.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'danish-warmblood/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'danish-warmblood/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'danish-warmblood/gen1-3.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dartmoor-pony/gen3-8.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen1-3.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'dutch-warmblood/gen3-10.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen1-3.webp',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen2-7.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'english-thoroughbred/gen3-10.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'finnhorse/gen3-9.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen1-7.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'fjordhorse/gen3-8.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen1-3.webp',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen2-3.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-horse/gen3-7.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen1-3.webp',
          },
        ],
      },
      {
        id: 2,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen2-6.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'friesian-sport-horse/gen3-3.webp',
          },
        ],
      },
    ],
  },
  {
    breed: 'Galaxy',
    generations: [
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'galaxy/gen3-1.webp',
          },
        ],
      },
    ],
  },
  {
    breed: 'Gotland Pony',
    generations: [
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'gotland-pony/gen3-8.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen2-7.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'haflinger/gen3-7.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen2-6.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'hannoverian/gen3-7.webp',
          },
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
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen2-10.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-9.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'icelandic-horse/gen3-10.webp',
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
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen1-6.webp',
          },
        ],
      },
      {
        id: 3,
        colors: [
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-1.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-2.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-3.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-4.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-5.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-6.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-7.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-8.webp',
          },
          {
            name: '',
            imageUrl: IMAGE_URL_PREFIX + 'irish-cob/gen3-9.webp',
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
