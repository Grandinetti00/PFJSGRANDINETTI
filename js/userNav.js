let userNav= sessionStorage.getItem("logUser");
if (userNav === null) {
    userNav = "User"
};

console.log(userNav);

let userTag = document.getElementById("userNav");
userTag.innerHTML = userNav;
