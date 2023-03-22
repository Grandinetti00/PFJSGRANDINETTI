const button = document.getElementById('buttonForgot');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('userForgot').value;

    console.log(email);
    
    if (email === "") {
        alert("Please enter your registration email");
    } else {
        alert("Check your email box!");
        window.location.replace("../pages/log.html");
    }
});
