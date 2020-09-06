
// sample data
const { User, Post } = require('../../models')

const resolvers = {
  Query: {
    // fetch authenticated user posts
    async myPosts(_, { postId }, { user }) {
      // make sure user is logged in
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      // return only the authenticated user posts
      return await Post.findOne({
        // 关联 User 表查询，只查询 User 表的 name 字段，
        // 并将 name 字段查询结果重命名为 userName
        include: [{model: User, attributes: ["username"]}],
        where: { id: postId }
      })
    }
  },

  Mutation: {
    // Add new post
    async addPost(_, { title, content }, { user }) {
      // make sure user is logged in
      if (!user) {
        throw new Error('You are not authenticated!')
      }
      return await Post.create({
        title,
        content,
        userId: user.id
      })
      // add new post to list of posts

      // return the newly added post
    }
  }
}

module.exports = resolvers