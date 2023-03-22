const button = document.getElementById('buttonLog');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('user').value;
    let contrasena = document.getElementById('password').value;

    console.log(username);
    console.log(contrasena);
    
    if (username === "" || contrasena === "") {
        alert("Some data is missing. Please try again.");
    } else {
        let logUser = JSON.parse(sessionStorage.getItem(username));
        
        console.log(logUser);

        if (logUser === null) {
            alert("Please, Log Up!");
            window.location.replace("../pages/newUser.html");
        } else {
            sessionStorage.setItem('logUser', username);
            window.location.replace("../index.html");
        }
    }
});