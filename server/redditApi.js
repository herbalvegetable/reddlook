const snoowrap = require('snoowrap');

const r = new snoowrap({
    userAgent: 'My Post Scraper Bot',
    clientId: 'acRzThSEqOqaT4pEkjtDeg',
    clientSecret: '4Njh5tclnlHiIdcHvlb9SDDr3mfXYQ',
    username: 'Business-Bed-1098',
    password: 'MelcO100',
});

const getHotPostsBasic = async subredditName => {
    try{
        const posts = await r.getSubreddit(subredditName).getHot({limit: 100});
        const basicDetails = posts.map((post, i) => {
            return {
                id: post.id,
                author: post.author.name,
                title: post.title,
                body: post.selftext.slice(0, 50),
                time: post.created_utc,
                score: post.score,
                num_comments: post.num_comments,
                unread: true,
            }
        });
        return basicDetails;
    }
    catch(err){
        console.log(err);
    }
}

const getPost = async postId => {
    try{
        const rawPost = await r.getSubmission(postId).fetch();
        console.log(rawPost);
        const post = {
            author: rawPost.author.name,
            title: rawPost.title,
            body: rawPost.selftext_html,
            time: rawPost.created_utc,
            score: rawPost.score,
            num_comments: rawPost.num_comments,
            comments: rawPost.comments,
        }
        return post;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    getHotPostsBasic,
    getPost,
}