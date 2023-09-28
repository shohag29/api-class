const viewUsers = document.getElementById("users");

fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => showUsers(data));

const showUsers = (users) => {
    console.log(users);
    users.map((user) => {
        const {
            albumId,
            id,
            thumbnailUrl,
            title,
            url,
        } = user;
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<div style="padding: 10px; text-align: center; border-radius: 10px; box-shadow: 0px 0px 10px gray; background-image: linear-gradient(to left,rgb(184, 0, 144),rgb(84, 0, 141),rgb(184, 0, 144)); height: 200px;color:white ">
        <p>${albumId}</p>
        <p>${id}</p>
        <p>${thumbnailUrl}</p>
        <p>${title}</p>
        <p>${url}</p>
    </div >
    `;
        viewUsers.appendChild(newDiv)
    });
};