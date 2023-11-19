document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    // Send a request to your server to check the login credentials and authenticate the user.
    // You should implement server-side code for this.
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    // Send a request to your server to register the user.
    // You should implement server-side code for this.
});
