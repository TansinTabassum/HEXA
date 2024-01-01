
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginSubmit").addEventListener("click", function () {
        // Replace this with your actual login logic
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Example: Validate credentials
        if (email === "user@example.com" && password === "password") {
            alert("Login successful");
        } else {
            alert("Invalid credentials");
        }
    });

    document.getElementById("signupLink").addEventListener("click", function (event) {
        event.preventDefault();
        // Open a new tab or window with the signup page URL
        window.open('signup.html', '_blank');
    });

    // Smooth scroll to section on navigation link click
    document.querySelectorAll('.navigation a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});