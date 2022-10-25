const express = require('express');
const cors = require('cors');
const { getHotPostsBasic, getPost } = require('./redditApi'); 

const app = express();
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use(cors());

// Reddit API
// (async () => {
    // console.log(await getHotPostsBasic('sgexams'));
    // console.log(await getPost('yc6kew'));
// })();

app.get('/:subredditName/hot', async (req, res) => {
    const { subredditName } = req.params;
    const posts = await getHotPostsBasic(subredditName);
    res.send(posts);
});

app.get('/:subredditName/post/:postId', async (req, res) => {
    const { postId } = req.params;
    const post = await getPost(postId);
    res.send(post);
});
