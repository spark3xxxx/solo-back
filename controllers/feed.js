exports.getPosts = (req, res, next) => {
  // res.status(200).json({
  //   posts: [
  //     {
  //       _id: '1',
  //       title: 'First Post',
  //       content: 'This is the first post!',
  //       imageUrl: 'images/duck.jpg',
  //       creator: {
  //         name: 'Maximilian'
  //       },
  //       createdAt: new Date()
  //     }
  //   ]
  // });
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post!",
        image: "https://spoonacular.com/recipeImages/632115-556x370.jpg",
        creator: {
          name: "Maximilian",
        },
        createdAt: new Date(),
      },
      {
        _id: "2",
        title: "Second Post",
        content: "This is the first post!",
        image: "https://spoonacular.com/recipeImages/632115-556x370.jpg",
        creator: {
          name: "Maximilian",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
      creator: { name: "Maximilian" },
      createdAt: new Date(),
    },
  });
};
