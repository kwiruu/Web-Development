function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace with your authentication logic
    if (username === 'keiru277' && password === '01230321') {
        window.location.href = 'main_page.html'; // Redirect to user profile page
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}