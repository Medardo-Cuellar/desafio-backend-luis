const Posts = require('../models/posts.model');

async function create(postData) {
    const newPost = await Posts.create(postData);
    return newPost;
}

async function getAll() {
    const allPosts = await Posts.find({});
    return allPosts;
}

async function searchPosts(query){
    const posts = await Posts.find(query);
    return posts;
}

async function deleteByID(id) {
    const deletedPost = await Posts.findByIdAndDelete(id);
    return deletedPost;
}

async function updateByID(id, newPostData) {
    const updatedPost = await Posts.findByIdAndUpdate(id, newPostData, {
        new: true,
    });
    return updatedPost;
}

module.exports = {
    create,
    getAll,
    searchPosts,
    deleteByID,
    updateByID,
};