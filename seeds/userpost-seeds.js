const { UserPost } = require('../models');

const userpostdata = [
  {
    user_id: 1,
    post_id: 8
  },

];

const seedUserPost = () => UserPost.bulkCreate(userpostdata);

module.exports = seedUserPost;
