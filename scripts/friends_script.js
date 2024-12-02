const friends = [
    {
        name: "John Mayer",
        username: "@mayer_john",
        pfp: "/images/pfp1.jpg", 
        status: "recently"
    },
    {
        name: "Alicia Keys",
        username: "@alicia_music",
        pfp: "/images/pfp2.jpg",  
        status: "recently"
    },
    {
        name: "Lady Gaga",
        username: "@gaga_monster",
        pfp: "/images/pfp6.jpg", 
        status: "recently"
    },
    {
        name: "David Gilmour",
        username: "@gilmour_david",
        pfp: "/images/pfp3.jpg", 
        status: "offline"
    },
    {
        name: "Beyoncé Knowles",
        username: "@beyonce_official",
        pfp: "/images/pfp4.jpg",
        status: "online"
    },
    {
        name: "Freddie Mercury",
        username: "@freddie_queen",
        pfp: "/images/pfp5.jpg",
        status: "offline"
    }
];


const friendsContainer = document.querySelector(".friends-list");

friends.forEach(friend => {

    friendElement = `
        <div class="friend-tag">
            <img src="${friend.pfp}" class="profile-picture">
            <div class="friend-text">
                <div class="nametag"><strong>${friend.name}</strong></div>
                <div class="hours-ago">${friend.username}</div>
            </div>
            <div class="friend-status-info">
                <div class="friend-status status-${friend.status}"></div>
            </div>
        </div>
    `;

    friendsContainer.innerHTML += friendElement;
});
