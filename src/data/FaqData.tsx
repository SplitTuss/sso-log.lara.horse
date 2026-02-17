import Link from 'next/link';

export const FAQ_DATA = [
  {
    question: 'What is this?',
    answer: (
      <div>
        This website was made to keep track of all the horses each of your{' '}
        <Link href="https://www.starstable.com" className="underline">
          StarStableOnline
        </Link>{' '}
        accounts own. I mostly used the images from the{' '}
        <Link href="https://ssodb.bplaced.net/db/en/horses.html" className="underline">
          original SSO-DB
        </Link>{' '}
        site and in-game data to make it more visually appealing and easier to use with filters.
      </div>
    ),
  },
  {
    question: 'Why?',
    answer: (
      <div>
        <p>
          To make life easier. I`ve always kept track of my SSO horses and accounts in a paper book
          but they keep adding breeds, coats and new generations, so at some point that book was so
          annoying to keep up to date, I decided to learn coding to fix my problem once and for all.
        </p>
        <p>I decided to share it with people because others might benefit from this site too.</p>
      </div>
    ),
  },
  {
    question: 'How do I use it?',
    answer: (
      <div>
        <div>
          <div className="font-bold text-lg text-purple-400">adding horses and accounts:</div>
          <p className="mb-4">
            First, you should add an account by clicking `add account` in the right top corner.
            <img
              src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/addingAccount.png"
              alt="picture of where to add accounts"
            />
            You can type in any name you want, so you could even call one `favorites` or `wishlist`
            to keep track of horses you might want to keep a closer eye on. Once you found the color
            that best describes your desire for that specific account, you can save it and it will
            appear in the list.
            <img
              src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/addedExampleUser.png"
              alt="added example account"
            />
            You can hide accounts by clicking the eye-icon, meaning thier owned horses and their
            adjacent names won`t show up anymore.
          </p>
          <p className="mb-4">
            Once you`ve added accounts and horses, you might want to save the table to your machine,
            either to move it to a different browser or just to make sure it won`t get lost. Your
            data will be locally saved in your browser but if someone were to clear that database,
            your data would be lost. That is why I`ve added the import and export buttons next to
            the `add account` button. Just make sure to export your table before importing a new
            one, since it will be overwritten.
          </p>
          <p className="mb-4">
            When you`ve created an account, you can start adding horses by clicking `edit` on the
            horse that you would like to add. For each horse that you add, you need to clarify which
            account you want to add it to and then you can choose the names.
            <img
              src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/addingHorseName.png"
              alt="popup of adding horse name"
            />
            Since we have to choose from a long list of names that are available in the game, I`ve
            added all the ones that I`m aware of at this time.
          </p>
        </div>
        <div>
          <div className="font-bold text-purple-400">finding horses:</div>
          <img
            src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/filter.png"
            alt="picture of filters"
          />
          To make it easier to find a specific breed, you can type the breed you are looking for
          into the search bar. You can also apply filters, which at this time you can filter them by
          whether or not they are still for sale, ones that you own and generations.
        </div>
      </div>
    ),
  },
  {
    question: 'If you know the SSO website, you might be wondering `why not use their system?`',
    answer: (
      <div>
        <p className="text-red-400">
          The main reason was that I wanted to learn coding and I saw a problem that needed a
          solution and took it into my own hands to find this solution, by developing this page.
        </p>
        <p className="text-purple-600">In short: because I wanted to!</p>
        <p>Long version:</p>
        <p>
          Their system did not exist a long time ago. I have been playing this game since 2013 and
          shortly after I started, I wanted to keep track of all of the accomplishments for my
          account, including owned horses. So I created a paperback book, into which I glued the
          printed out photos that I got from the SSO-DB.
        </p>
        <p>
          At some point SSO released new generations of horses, so the printed out and glued down
          images of each horse didn`t have enough space right next to the old generation, or they
          released new coat variations for one breed that had been out for a while, and again, there
          was not enough room for more printed out photos. I restarted the whole book one time, did
          it all over again, but they keep releasing horses and now some aren`t for sale anymore, so
          a paper book is just really inconvenient to use and keep up to date.
        </p>
        <p>
          Now they added an overview of which horse you own on the account you`re logged into on
          their website, which is great but I had a different vision. Mainly I wanted to be able to
          see all my accounts at once.
        </p>
        <p>
          Somewhere between me deciding to learn coding and this project being open to use for you,
          SSO added their function to their website. We had a similar idea but came up with two very
          different solutions.
        </p>
        <p>If you`re not aware what SSO`s solution to this issue was, here you go:</p>
        <p>
          Obviously you need to be logged into one account to see this information, where some of it
          is very nice to know and I haven`t implemented that yet, since I was more focused on
          seeing all my accounts` data at the same time vs. detailled information for one.
        </p>
        <div className="flex items-center m-2">
          Here`s the information for each specifically chosen horse:
          <img
            src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/horseOverviewSso.png"
            alt="information for chosen horse"
            className="max-w-3/4"
          />
        </div>
        <div className="flex items-center m-2">
          You can find your horse in this dropdown, which might look different depending on your
          device, but no way to search:
          <img
            src="https://s3.us-east-1.amazonaws.com/images.sso-log.lara.horse/introduction/horseListSso.png"
            alt="information for chosen horse"
            className="max-w-3/4"
          />
        </div>
        <div>
          There is also the{' '}
          <Link href="https://www.starstable.com/horses/breeds" className="underline">
            Star Stable Horses
          </Link>{' '}
          collection, but they do not show all breeds and you can only see if you own at least one
          horse for each breed and not which coat variations you own or their name. It is a great
          add-on though and I am happy they decided to add this to their website!
        </div>
      </div>
    ),
  },
  {
    question: 'What about my data though?',
    answer: (
      <div>
        <p>I`ve heard concerns about this so I feel like I need to mention it. </p>
        <p>
          Since you will not be putting any confidential data onto this site, there is no need to
          worry about your data. This site was made to keep track of mainly names in a computer
          game, so this specific data is really not that confidential.
        </p>
        <p>
          Because of the fact that your data doesn`t get saved on any servers, it`s only saved
          locally in your browser, I won`t ever see your inputs either.
        </p>
        <p>
          I`m using Google Analytics to see which countries people are from who used this site and
          how many of you guys actively use it, so that is the only `data` you are sharing with me.
        </p>
        <p>
          All that being said, if you want to keep all the names you came up with to yourself, don`t
          let anyone else use this exact browser. If they do, you can always export your data, save
          it somewhere safe and delete whatever you added to the site.
        </p>
      </div>
    ),
  },
];
