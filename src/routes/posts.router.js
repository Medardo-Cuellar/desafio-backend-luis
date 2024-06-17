const express = require('express');
const postsUseCases = require('../usecases/posts.usecase');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const postData = request.body;
        const newPost = await postsUseCases.create(postData);
        response.json({
            success: true,
            message: 'Post created',
            data: {
                post: newPost,
            },
        });
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error creating post',
            error: error.message,
        });
    }
});

router.get('/', async (request, response) => {
    try {
        const allPosts = await postsUseCases.getAll();
        response.json({
            success: true,
            message: 'All posts',
            data: {
                posts: allPosts,
            },
        });
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error getting posts',
            error: error.message,
        });
    }
});

router.get('/:query', async (request, response) => {
    try {
        const query = request.params.query;
        const posts = await postsUseCases.searchPosts(query);
        response.json({
            success: true,
            message: 'Posts found',
            data: {
                posts,
            },
        });
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error searching posts',
            error: error.message,
        });
    }
});

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const newPostData = request.body;
        const updatedPost = await postsUseCases.updateByID(id, newPostData);
        response.json({
            success: true,
            message: 'Post updated',
            data: {
                post: updatedPost,
            },
        });
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error updating post',
            error: error.message,
        });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deletedPost = await postsUseCases.deleteByID(id);
        response.json({
            success: true,
            message: 'Post deleted',
            data: {
                post: deletedPost,
            },
        });
    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error deleting post',
            error: error.message,
        });
    }
});

module.exports = router;