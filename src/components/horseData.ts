type HorseData = Array<{
  breed: string;
  generations: Array<{
    id: number;
    images: Array<{
      url: string;
      alt: string;
      nameJulie: string;
      nameArisha: string;
      nameOther: string;
    }>
  }>;
}>;

const imagesLink = 'https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/';

export const HORSE_DATA: HorseData = [
  {
    breed: 'Akhal-Teke',
    generations: [{
      id: 1,
      images: [
        {
          url: 'https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/akhal-teke/gen1-1.webp',
          alt: 'palomino akhal-teke, generation 1',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'akhal-teke/gen1-2.webp',
          alt: 'buckskin akhal-teke, generation 1',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          url: imagesLink + 'akhal-teke/gen3-1.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'akhal-teke/gen3-2.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'akhal-teke/gen3-3.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'akhal-teke/gen3-4.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: 'akhal-teke/gen3-5.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: 'akhal-teke/gen3-6.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: 'akhal-teke/gen3-7.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: 'Tuxedoplay',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: 'akhal-teke/gen3-8.webp',
          alt: 'akhal-teke, generation 3',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    ]
  },
  {
    breed: 'American Paint Horse',
    generations: [{
      id: 1,
      images: [
        {
          url: imagesLink + 'american-paint-horse/gen1-1.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen1-2.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen1-3.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen1-4.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen1-5.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          url: imagesLink + 'american-paint-horse/gen2-1.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen2-2.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen2-3.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen2-4.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        }, {
          url: imagesLink + 'american-paint-horse/gen2-5.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          url: imagesLink + 'american-paint-horse/gen3-1.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-2.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-3.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-4.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-5.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-6.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-7.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-8.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-9.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-10.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-11.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-paint-horse/gen3-12.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    }]
  },
  {
    breed: 'American Quarter Horse',
    generations: [{
      id: 2,
      images: [
        {
          url: imagesLink + 'american-quarter-horse/gen2-1.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen2-2.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen2-3.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen2-4.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen2-5.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen2-6.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen2-7.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          url: imagesLink + 'american-quarter-horse/gen3-1.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-2.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-3.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-4.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-5.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-6.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-7.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-8.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-9.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-10.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: imagesLink + 'american-quarter-horse/gen3-11.webp',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    ]
  },
  {
    breed: 'fourth breed',
    generations: [{
      id: 1,
      images: [
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    {
      id: 2,
      images: [
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    },
    {
      id: 3,
      images: [
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
        {
          url: '',
          alt: '',
          nameJulie: '',
          nameArisha: '',
          nameOther: '',
        },
      ],
    }]
  },
]