const express = require('express');
const tokenVerification = require('../middleware/token.verification');
const postController = require('./post.controller');
const postRouter = express.Router();

//get all post
postRouter.get('/posts', postController.getAllPost);

//get posts from specified writer
postRouter.get('/post', tokenVerification, postController.getWriterPost);

//create post
postRouter.post('/post', tokenVerification, postController.createPost);

//edit post
postRouter.put('/post/:postId', tokenVerification, postController.editPost)

//get post detail
postRouter.get('/post/:postId', postController.detailPost);

//delete post
postRouter.delete('/post/:postId', tokenVerification, postController.deletePost);



module.exports = postRouter;