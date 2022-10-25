const snoowrap = require('snoowrap');
const randomColor = require('randomcolor');

const r = new snoowrap({
    userAgent: 'My Post Scraper Bot',
    clientId: 'acRzThSEqOqaT4pEkjtDeg',
    clientSecret: '4Njh5tclnlHiIdcHvlb9SDDr3mfXYQ',
    username: 'Business-Bed-1098',
    password: 'MelcO100',
});

const getHotPostsBasic = async subredditName => {
    try{
        const posts = await r.getSubreddit(subredditName).getHot({limit: 85});
        // console.log(posts.map(post => {
        //     let p = {...post}
        //     delete p.comments;
        //     return p;
        // }));
        const basicDetails = posts.map((post, i) => {
            return {
                id: post.id,
                author: post.author.name,
                title: post.title,
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
            comments: rawPost.comments,

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