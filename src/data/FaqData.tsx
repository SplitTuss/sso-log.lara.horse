export const FAQ_DATA = [
  {
    question: 'What is this?',
    answer: (
      <div>
        This website was made to keep track of all the horses each of your StarSTableOnline accounts
        own. I mostly used the images from the original SSO-DB site and the in-game data to make it
        more visually appealing and easier to use with filters.
      </div>
    ),
  },
  {
    question: 'Why?',
    answer: (
      <p>
        To make life easier. I`ve always kept track of my SSO horses and accounts in a paper book
        but they keep adding breeds, coats and new generations, so at some point the paper book was
        so annoying that I decided to learn coding to fix this problem once and for all.
      </p>
    ),
  },
  {
    question: 'How do I use it?',
    answer: (
      <div>
        <div className="mb-4">
          <div className="font-bold text-lg">adding horses and accounts:</div>
          <p>
            First, you should add an account. You can type in any name you want to, so you could
            even call one `favorites` or `wishlist` to keep track of horses you might want to keep a
            closer eye on. Once you found the color that best describes your desire for that
            specific account, you can save it and it will appear in the list in the right top
            corner. You can hide accounts, meaning thier owned horses and their adjacent names won`t
            show up anymore.
          </p>
          <p>
            Then you can start adding horses. For each horse that you add, you need to clarify which
            account you want to add it to and then you can choose the names. Since we have to choose
            from a long list of names that are available in the game, I`ve added all the ones that
            I`m aware of at this time.
          </p>
          <p>
            There are two buttons for importing or exporting your data, in case you wanted to make
            sure it is saved or if you wanted to move it to a different browser or machine. Your
            data will be locally saved in your Browser but if someone were to clear that Database,
            your data would be lost.
          </p>
        </div>
        <div className="mb-4">
          <div className="font-bold text-lg">adding horses and accounts:</div>
          <p>
            First, you should add an account. You can type in any name you want to, so you could
            even call one `favorites` or `wishlist` to keep track of horses you might want to keep a
            closer eye on. Once you found the color that best describes your desire for that
            specific account, you can save it and it will appear in the list in the right top
            corner. You can hide accounts, meaning thier owned horses and their adjacent names won`t
            show up anymore.
          </p>
          <p>
            Then you can start adding horses. For each horse that you add, you need to clarify which
            account you want to add it to and then you can choose the names. Since we have to choose
            from a long list of names that are available in the game, I`ve added all the ones that
            I`m aware of at this time.
          </p>
          <p>
            There are two buttons for importing or exporting your data, in case you wanted to make
            sure it is saved or if you wanted to move it to a different browser or machine. Your
            data will be locally saved in your Browser but if someone were to clear that Database,
            your data would be lost.
          </p>
        </div>
        <div>
          <div className="font-bold">finding horses:</div>
          To make it easier to find a specific breed, you can type the breed you are looking for
          into the search bar. You can also apply filters, which at this time you can filter them by
          generations, whether or not they are still for sale and ones that you own.
        </div>
      </div>
    ),
  },
  {
    question:
      'If you`re still here and know the SSO website, you might be wondering `why not use their system?`',
    answer: (
      <div>
        <p>
          Because theirs did not exist a long time ago. I have been playng this game since 2013 and
          shortly after I started, I wanted to keep track of all of the accomplishments for my
          account, including owned horses. So I created a paperback book, in which I glued the
          printed out photos that I got from the SSO-DB.
        </p>
        <p>
          At some point sso released new generations of horses, so the printed out and glued down
          images of each horse didn`t have enough space right next to the old generation, or they
          released new coat variations for one breed that had been out for a while, and again, there
          was not enough room for more printed out photos. I restarted the whole book one time, did
          it all over again, but they keep releasing horses and now some aren`t for sale anymore, so
          a paper book is just really annoying and inconvenient to use and keep up to date.
        </p>
        <p>
          Now they added an overview of which horse you own on the account you`re logged into on
          their website, which is great and all, but it`s just not as visually pleasing and the
          overview isn`t great. Also if you have multiple accounts, you can`t see them all at once.
        </p>
        <p>There are many more reasons I could list here but honestly, this is the main reason.</p>
        <p className="text-red-400">
          The second most important reason was that I wanted to learn coding and I saw a problem
          that needed a solution and took it into my own hands to find this solution, by developing
          this page.
        </p>
        <p>
          Somewhere between me deciding to learn coding and this project being open to use for you,
          SSO added their function to their website. We had a similar idea, came up with two very
          different solutions, but which one is nicer to use?
        </p>
        <p>I would be glad to hear your feedback and constructive ideas for improvements.</p>
      </div>
    ),
  },
  {
    question: 'What about my data though?',
    answer: (
      <div>
        <p>
          I`ve heard concerns about this so I feel like I need to mention it. Since you will not be
          putting any confidential data onto this site, there is no need to worry about your data.
          This site was made to keep track of mainly names in a computer game, so the data is not
          confidential.
        </p>
        <p>
          I will never see your data either, since it doesn`t get saved on any servers, it`s only
          saved locally in your browser.
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
