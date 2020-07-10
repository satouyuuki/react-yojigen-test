const DB = {
  threads: [
    // id, title, description, user_id
    {
      id: 1,
      title: "test title",
      description: "test description",
      user_id: 1
    }
  ],
  comments: [
    // id, comment, user_id, thread_id
    {
      id: 1,
      title: "test title",
      description: "test description",
      user_id: 1,
      thread_id: 1
    }
  ],
  users: [
    // id, name, email, password
    {
      id: 1,
      name: "テスト",
      email: "test@gmail.com",
      password: "test1234"
    }
  ],
  likes: [
    // id, user_id, thread_id
    {
      id: 1,
      user_id: 1,
      thread_id: 1
    }
  ]
}
module.exports = DB;