const profileInfo = {
    name: "John Lennon",
    age: 34,
    location: "Liverpool, UK",
    occupation: "Aspiring musician",
    bio: "Aiming to change the world through music.",
    banner: "/images/banner.jpg",
    pfp: "images/profilepic.jpeg"
};

posts_images = [
    "/images/pfpost1.jpg",
    "/images/pfpost2.jpg",
    "/images/pfpost3.jpg",
    "/images/pfpost4.jpg"
];

const profileElement = document.querySelector('.profile-info');
profileElement.innerHTML += `
    <div class="profile-header">
        <img class="banner" src="${profileInfo.banner}">
        <img class="profile-main-picture" src="${profileInfo.pfp}">
    </div>
    <div class="profile-buttons">
        <span class="profile-button">Testimonials</span>
        <span></span>
        <span class="profile-button">Edit Profile</span>
    </div>
    <div class="profile-text-info">
        <p class="profile-name">${profileInfo.name}</p>
        <p class="bio">${profileInfo.age} years old, from ${profileInfo.location}. ${profileInfo.occupation} aiming to ${profileInfo.bio}</p>
    </div>
`;

const postsContentElement = document.querySelector(".posts-content");
postsContentElement.innerHTML += `
    <div class="side">
        <img src="${posts_images[0]}">
        <img src="${posts_images[1]}">
    </div>

    <div class="side">
        <img src="${posts_images[2]}">
        <img src="${posts_images[3]}">
    </div>
`;