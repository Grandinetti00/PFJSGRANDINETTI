const button = document.getElementById('buttonLog');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('user').value;
    let contrasena = document.getElementById('password').value;

    console.log(username);
    console.log(contrasena);
    
    if (username === "" || contrasena === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Some data is missing. Please try again.',
          });
    } else {
        let logUser = JSON.parse(sessionStorage.getItem(username));
        
        console.log(logUser);

        if (logUser === null) {
            Swal.fire({
                icon: 'warning',
                title: 'No user?',
                html:'Log up ' + '<a href="../pages/newUser.html">here</a>',
              });
        } else {
            sessionStorage.setItem('logUser', username);
            window.location.replace("../index.html");
        }
    }
});