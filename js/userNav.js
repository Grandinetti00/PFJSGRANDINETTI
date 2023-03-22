let userNavJSON = sessionStorage.getItem("logUser");
let userNav = userNavJSON;

console.log(userNavJSON);
console.log(userNav);

let userTag = document.getElementById("userNav");
userTag.innerHTML = userNav;
