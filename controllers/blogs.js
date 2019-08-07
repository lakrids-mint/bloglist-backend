const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

blogsRouter.get("/", async (request, response, next) => {
  try {
    const blogs = await Blog.find({}).populate("user", {
      username: 1,
      name: 1
    });
    response.json(blogs.map(blog => blog.toJSON()));
  } catch (e) {
    next(e);
  }
});

blogsRouter.get("/:id", async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id);
    if (blog) {
      response.json(blog.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (e) {
    next(e);
  }
});

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};
blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const token = getTokenFrom(request);
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }
    const user = await User.findById(decodedToken.id);

    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    });
    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.json(savedBlog.toJSON());
  } catch (exception) {
    next(exception);
  }
});
blogsRouter.delete("/:id", async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (e) {
    next(e);
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  const body = request.body;
  const blog = {
    likes: body.likes
  };
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
      new: true
    });
    response.json(updatedBlog.toJSON());
  } catch (e) {
    next(e);
  }
});

//comments - post one for a particular blog
blogsRouter.put("/:id/comments", async (request, response, next) => {
  console.log(
    "a comment***********************************************************************************"
  );

  console.log("request body", request.body);
  try {
    const blogToUpdate = await Blog.findById(request.params.id);
    console.log(blogToUpdate);
    blogToUpdate.comments.push(request.body);
    blogToUpdate.save();
    console.log("new blog save", blogToUpdate);
    response.json(blogToUpdate.toJSON());
    console.log("updated");
  } catch (e) {
    next(e);
  }
});

module.exports = blogsRouter;
