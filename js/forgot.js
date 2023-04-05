const button = document.getElementById('buttonForgot');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('userForgot').value;

    console.log(email);
    
    if (email === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter your registration email',
          });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Check your email box!',
            html:'Go to ' + '<a href="../pages/log.html">Log In</a>',
          });
    }
});
