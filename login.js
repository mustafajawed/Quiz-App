let userStore = JSON.parse(localStorage.getItem("usersss")) || [];

function signupFunction() {
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (email === "" || password === "") {
        alert("Email and password cannot be empty");
        return;
    }

    let user = {
        email: email,
        password: password,
    };

    
    let userExists = userStore.some(existingUser => existingUser.email === user.email);
    console.log(userExists)
    if (userExists) {
        alert("User already exists with this email");
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
    } else {
        userStore.push(user);
        localStorage.setItem("usersss", JSON.stringify(userStore));
        alert("Signup Successful");
        document.getElementById("signup-email").value = "";
        document.getElementById("signup-password").value = "";
    }
}

document.getElementById("signup-btn").addEventListener("click", signupFunction);

// login////////////////////////

document.getElementById("login-button").addEventListener("click", loginFunction);

function loginFunction() {
    var emailValueLogin = document.getElementById("login-email").value;
    var passwordValueLogin = document.getElementById("login-password").value;

    if (emailValueLogin === "" || passwordValueLogin === "") {
        alert("Email and password cannot be empty");
        return;
    }

    let adminLogin = userStore.find(user => emailValueLogin === "admin@admin.com" && passwordValueLogin === "1234")
    if (adminLogin) {
        alert("you can now go to admin panel")
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
        window.open("admin.html")
        window.close("login.html")
        return;

    }
    let user = userStore.find(user => user.email === emailValueLogin && user.password === passwordValueLogin);
   
    
    if (user) {
        alert("Login Successful");
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
        window.open("main.html");
        
    } else {
        alert("Wrong email or password");
    }
}