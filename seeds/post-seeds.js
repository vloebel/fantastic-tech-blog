const { Post } = require('../models');

const postdata = [
  {
    title: 'Heres a stay.',
    post_txt: 'that shakes the rotten carcass of old death out of its rags',
    user_id: 10
  },
  {
    title: 'Heres a large mouth indeed.',
    post_txt: 'That spits forth rocks and mountains, death and fire.',
    user_id: 8
  },
  {
    title: 'Talks as familiarly of roaring lions.',
    post_txt: 'as maids of thirteen do of puppy dogs',
    user_id: 1
  },
  {
    title: 'What cannoneer begat this lusty youth.',
    post_txt: 'he speaks plain cannonfire and smoke and bounce',
    user_id: 4
  },
  {
    title: 'He sounds the bastionado.',
    post_txt: 'with his tongue',
    user_id: 7
  },
  {
    title: 'Not a word of his but.',
    post_txt: 'buffets better than the FIST of France',
    user_id: 4
  },
  {
    title: 'Zwounds!',
    post_txt: 'I was never so bethumped with words',
    user_id: 1
  },
  {
    title: 'Sincd first.',
    post_txt: 'I called my brothers father Dad.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_txt: 'Duis ac nibhDuis ac nibhDuis ac nibh',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_txt: 'Duis ac nibhDuis ac nibhDuis ac nibhDuis ac nibhDuis ac nibhDuis ac nibh',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_txt: 'Duis ac nibhDuis ac nibhDuis ac nibhDuis ac nibhDuis ac nibh',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_txt: 'Dulcet and decorum est per patria morii',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_txt: 'Donec! Dont eat the dapibus!',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_txt: 'Tellus nothing, Nulla',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_txt: 'some post text: gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_txt: 'some post text: paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_txt: 'some post text: wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_txt: 'some post text: shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_txt: 'some post text: java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_txt: 'some post text: java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
