const snoowrap = require('snoowrap');
const randomColor = require('randomcolor');

require('dotenv').config();

const r = new snoowrap({
    userAgent: 'My Post Scraper Bot',
    clientId: process.env.REDDIT_API_CLIENT_ID,
    clientSecret: process.env.REDDIT_API_CLIENT_SECRET,
    username: process.env.REDDIT_API_USERNAME,
    password: process.env.REDDIT_API_PASSWORD,
});

const getHotPostsBasic = async subredditName => {
    try{
        console.log('Fetching Hot posts...');
        const posts = await r.getSubreddit(subredditName).getHot({limit: 175});

        const basicDetails = posts.map((post, i) => {
            return {
                id: post.id,
                author: post.author.name,
                title: post.title.slice(0, 50),
                body: post.selftext.slice(0, 50),
                time: post.created_utc,
                score: post.score,
                commentsNum: post.num_comments,
                unread: true,

                profileIconColour: randomColor({
                    luminosity: 'dark',
                }),
            }
        });
        return basicDetails;
    }
    catch(err){
        console.log(err);
    }
}

const getTopPostsBasic = async (subredditName, timeFilter) => {
    try{
        const posts = await r
            .getSubreddit(subredditName)
            .getTop({time: timeFilter, limit: 175});

        const basicDetails = posts.map((post, i) => {
            return {
                id: post.id,
                author: post.author.name,
                title: post.title.slice(0, 50),
                body: post.selftext.slice(0, 50),
                time: post.created_utc,
                score: post.score,
                commentsNum: post.num_comments,
                unread: true,

                profileIconColour: randomColor({
                    luminosity: 'dark',
                }),
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

        let p = {...rawPost};
        delete p.comments;
        console.log(p);

        const post = {
            author: rawPost.author.name,
            title: rawPost.title,
            body: rawPost.selftext_html,
            time: rawPost.created_utc,
            score: rawPost.score,
            commentsNum: rawPost.num_comments,
            subreddit: rawPost.subreddit.display_name,

            url: rawPost.url,
            imgUrl: rawPost.preview?.images[0]?.source?.url || null,
            imgList: 
                rawPost.media_metadata ? 
                
                Object.keys(rawPost.media_metadata).map(imgId => {
                    const imgSrc = rawPost.media_metadata[imgId]?.s?.u;
                    const caption = rawPost.gallery_data?.items?.find(media => media.media_id == imgId).caption || '';

                    return {
                        imgSrc,
                        caption,
                    }
                })

                : [],

            ...(rawPost.is_video && {
                videoUrl: rawPost.media.reddit_video.fallback_url,
            })
        }
        return post;
    }
    catch(err){
        console.log(err);
    }
}

const getPostComments = async postId => {
    try{
        const rawPost = await r.getSubmission(postId).fetch();
        return rawPost.comments;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    getHotPostsBasic,
    getTopPostsBasic,
    getPost,
    getPostComments,
}