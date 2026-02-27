import Link from 'next/link';

export const FAQ_DATA = [
  {
    question: 'Why did I create this page?',
    answer: (
      <div>
        <p>
          Ever since I started playing this game in 2013, I`ve kept track of my accounts` horses and
          accomplishments in a paper book.
        </p>
        <p>
          But they keep adding breeds, coats and new generations. At some point that book was really
          annoying to keep up to date, so I decided to learn coding to fix my problem creatively.
        </p>
        <p>I decided to share it with people because others might benefit from this site too.</p>
        <p>
          I used mainly Abbie Starwatchers images from the{' '}
          <Link href="https://ssodb.bplaced.net/db/en/horses.html" className="underline">
            SSO-DB
          </Link>
        </p>
      </div>
    ),
  },
  {
    question: 'How this site is different to SSO`s site',
    answer: (
      <div>
        <p>Here is an example of what their account page`s info on each horse looks like:</p>
        <div className="flex justify-center m-2">
          <img
            src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/horsesOverviewSSO.png"
            alt="information for chosen horse"
            className="max-h-70"
          />
        </div>
        <p>
          Aside from the fact that you can only see one accounts` data at a time, since you have to
          be logged in, they focus more on WHEN you bought each horse.
        </p>
        <p>
          For me, it was important to see multiple accounts in one spot and less important when and
          in which order I bought them.
        </p>
        <p className="mb-2">
          They show more specific data for each horse, but there are no images.
        </p>
        <p>
          <Link href="https://www.starstable.com/horses/breeds" className="underline">
            SSO`s breeds site
          </Link>{' '}
          shows you which breed you own but not which coat variation.
        </p>
        <p>
          It also does not include breeds or generations that are not available to buy anymore, but
          I like to be able to see those too. They are just as much part of my herd as the ones that
          are still available.
        </p>
        <p>
          I also like seeing the horse`s image with its name right next to it, just because I have
          always done it like that.
        </p>
        <p>
          A personal preference of mine is to not use the same names over and over again (especially
          with the same account), so I added the list of available horse names with a count for each
          name, for each account.
        </p>
      </div>
    ),
  },
  {
    question: 'What about your data?',
    answer: (
      <div>
        <p>
          This site was made to keep track of mainly names in a computer game, so this specific data
          is really not that confidential.
        </p>
        <p className="mb-2">
          Because of the fact that your data doesn`t get saved on any servers, but it`s only saved
          locally in your browser, I won`t ever see your inputs.
        </p>
        <p>
          All that being said, if you want to keep all the names you came up with to yourself but
          are sharing the browser with other people, you can always export your data, save it
          somewhere safe and delete whatever you added to the site.
        </p>
      </div>
    ),
  },
];
