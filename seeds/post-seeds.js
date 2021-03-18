const { Post } = require('../models');

const postdata = [
  {
    title: 'Post 1 from USER 10',
    post_txt: 'This is post one. This is post one. This is post one.',
    user_id: 10
  },
  {
    title: 'Post 2 from User 8.',
    post_txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat fugiat ex ipsa, incidunt aut suscipit, ipsum dicta neque maxime numquam enim eveniet aliquid quidem. Similique quod temporibus distinctio nam laboriosam perferendis earum doloremque, ipsa tenetur minima quasi? Eos, tenetur? Esse!.',
    user_id: 8
  },
  {
    title: 'Post 3 from User 1.',
    post_txt: 'Sit amet consectetur adipisicing elit. Repellat fugiat ex ipsa, incidunt aut suscipit, ipsum dicta neque maxime numquam enim eveniet aliquid quidem. Similique quod temporibus distinctio nam laboriosam perferendis earum.',
    user_id: 1
  },
  {
    title: 'Post 4 from user 4.',
    post_txt: 'Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.Post 4 from user 4.',
    user_id: 4
  },
  {
    title: 'Post 5 from user 7.',
    post_txt: 'amet consectetur adipisicing elit. Repellat fugiat ex ipsa, incidunt aut suscipit, ipsum dicta neque maxime numquam enim eveniet aliquid quidem.',
    user_id: 7
  },
  {
    title: 'Post 6 from user 4',
    post_txt: 'Post 6 from user 4Post 6 from user 4.',
    user_id: 4
  },
  {
    title: 'Post 7 from user 1',
    post_txt: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat fugiat ex ipsa, incidunt aut suscipit, ipsum dicta neque maxime numquam enim eveniet aliquid quidem',
    user_id: 1
  },
  {
    title: 'Post 8 from user 1.',
    post_txt: 'Post 8 from user one. Post 8 from user one. Post 8 from user one. Post 8 from user one. Post 8 from user one. Post 8 from user one. ',
    user_id: 1
  },
  {
    title: 'Post 9 from user 9.',
    post_txt: 'dolor sit amet consectetur adipisicing elit. Repellat fugiat ex ipsa, incidunt aut suscipit, ipsum dicta neque maxime numquam enim eveniet aliquid quidem',
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
