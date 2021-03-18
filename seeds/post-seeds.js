const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1 from User 10.',
    post_txt: 'Post 1 from User 10.Post 1 from User 10.Post 1 from User 10.Post 1 from User 10.Post 1 from User 10.Post 1 from User 10.Post 1 from User 10.Post 1 from User 10.',
    user_id: 10
  },
  {
    title: 'Post 2 from User 8.',
    post_txt: 'Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.Post 2 from User 8.',
    user_id: 8
  },
  {
    title: 'Post 3 from User 1.',
    post_txt: 'Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.Post 3 from User 1.',
    user_id: 1
  },
  {
    title: 'Post 4 from user 4.',
    post_txt: 'Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.',
    user_id: 4
  },
  {
    title: 'Post 5 from user 7.',
    post_txt: 'Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7Post 5 from user 7',
    user_id: 7
  },
  {
    title: 'Post 6 from user 4',
    post_txt: 'Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4Post 6 from user 4',
    user_id: 4
  },
  {
    title: 'Post 7 from user 1',
    post_txt: 'Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1Post 7 from user 1',
    user_id: 1
  },
  {
    title: 'Post 8 from user 1.',
    post_txt: 'Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user Post 8 from user .',
    user_id: 1
  },
  {
    title: 'Post 9 from user 9.',
    post_txt: 'Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9Post 9 from user 9',
    user_id: 9
  },
  {
    title: 'Post 10 from user 5.',
    post_txt: 'Post 10 from user 5.Post 10 from user 5.Post 10 from user 5.Post 10 from user 5.Post 10 from user 5.Post 10 from user 5.Post 10 from user 5.',
    user_id: 5
  
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
