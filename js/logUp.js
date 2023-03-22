class Usuario {
    constructor(name, lastname, username, email, password, newpassword) {
      this.name = name;
      this.lastname = lastname;
      this.username = username;
      this.email = email;
      this.password = password;
      this.newpassword = newpassword;
    }
};

const button = document.getElementById('buttonLog');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let newpassword = document.getElementById('newpassword').value;

    console.log(name);
    console.log(lastname);
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(newpassword);
    
    if (name === "" || lastname === "" || username === "" || email === "" || password === "" || newpassword === ""){
        alert("Some data is missing. Please try again.");
    } else {
        const newUsuario = new Usuario (username, lastname, username, email, password, newpassword);
        let newUsuarioJSON = JSON.stringify(newUsuario);
        sessionStorage.setItem(username, newUsuarioJSON);
        sessionStorage.setItem("logUser", username);
        alert("Welcome to Quick Training!");
        window.location.replace("../index.html");
    }
});