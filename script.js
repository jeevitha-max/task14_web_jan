

// FRONTEND ONLY AUTHENTICATION - Demo Purpose Only

// Register Function
function register() {

    // Get values from input fields
    const username = document.getElementById("regUser").value;
    const password = document.getElementById("regPass").value;
    const message = document.getElementById("regMsg");

    // Check if fields are empty
    if (username === "" || password === "") {
        message.textContent = "Please fill all fields";
        message.style.color = "red";
        return;
    }

    // Store user data in LocalStorage
    localStorage.setItem(username, password);

    // Success message
    message.textContent = "Registration Successful!";
    message.style.color = "green";
}


// Login Function
function login() {

    // Get values from input fields
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;
    const message = document.getElementById("loginMsg");

    // Get stored password from LocalStorage
    const storedPassword = localStorage.getItem(username);

    // Validate credentials
    if (storedPassword === password) {

        // Save session (logged in user)
        localStorage.setItem("loggedInUser", username);

        // Redirect to dashboard
        window.location.href = "dashboard.html";

    } else {
        message.textContent = "Invalid Username or Password";
        message.style.color = "red";
    }
}
