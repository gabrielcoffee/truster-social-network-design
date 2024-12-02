const posts = 
[
    {
        user: {
            username: "nature_lover",
            pfp: "/images/pfp1.jpg",
        },
        date_posted: "2h ago",
        post_img: "/images/post3.webp",
        post_text: "Beautiful day at the park",
        comments: [
            {
                user: {
                    username: "hiker123",
                    pfp: "/images/pfp2.jpg",
                },
                comment_text: "Great view! Where is this?"
            },
            {
                user: {
                    username: "sunshine22",
                    pfp: "/images/pfp4.jpg",
                },
                comment_text: "That looks fun!"
            }
        ]
    },
    { 
        user: {
            username: "sarah1212",
            pfp: "/images/pfp3.jpg",
        },
        date_posted: "4h ago",
        post_img: "/images/post1.png",
        post_text: "Hanging out with friends",
        comments: [
            {
                user: {
                    username: "hiker123",
                    pfp: "/images/pfp2.jpg",
                },
                comment_text: "Looks nice"
            },
            {
                user: {
                    username: "sunshine22",
                    pfp: "/images/pfp4.jpg",
                },
                comment_text: "Where's Julia?"
            }
        ]
    }
]

const postsContainer = document.querySelector('.posts');

posts.forEach(post => {

    postElement = `
        <div class="post">
            <div class="post-header">
                <img src="${post.user.pfp}" class="profile-picture">
                <div class="post-header-text">
                    <div class="nametag"><strong>@${post.user.username}</strong></div>
                    <div class="hours-ago">${post.date_posted}</div>
                </div>
            </div>

            <img src="${post.post_img}" class="post-picture">

            <div class="post-text">
                <p>${post.post_text}</p>
            </div>

            <div class="post-comments">
                ${post.comments.map(comment => `
                    <div class="comment">
                        <img src="${comment.user.pfp}" class="comment-profile-picture">
                        <div class="comment-content">
                            <div class="nametag"><strong>@${comment.user.username}</strong></div>
                            <div class="hours-ago">${comment.comment_text}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    postsContainer.innerHTML += postElement;
});
