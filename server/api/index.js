const express = require('express');
const cors = require('cors');
const { getHotPostsBasic, getTopPostsBasic, getPost, getPostComments } = require('../redditApi'); 

const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    next();   
});

// Reddit API

app.get('/:subredditName/hot', async (req, res) => {
    const { subredditName } = req.params;
    const { limit, after } = req.query;
    console.log(limit, after);
    var options = {
        limit: parseInt(limit) || 15, 
        ...(after && {after}),
    }
    console.log(options);
    const posts = await getHotPostsBasic(subredditName, options);
    res.send(posts);
});

app.get('/:subredditName/top', async (req, res) => {
    const { subredditName } = req.params;
    const { time, limit, after } = req.query;
    console.log(limit, parseInt(limit) || 15);
    const posts = await getTopPostsBasic(subredditName, {
        time: time || 'all',
        limit: parseInt(limit) || 15,
        ...(after && {after}),
    });
    res.send(posts);
});

app.get('/:subredditName/post/:postId', async (req, res) => {
    const { subredditName, postId } = req.params;
    const post = await getPost(postId);
    res.send(post);
});

app.get('/:subredditName/comments/:postId', async (req, res) => {
    const { subredditName, postId } = req.params;
    const comments = await getPostComments(postId);
    res.send(comments);
});
