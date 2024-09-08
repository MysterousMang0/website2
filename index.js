console.log('hello world');
const key = "12345"

function login() {
    var UserInput = document.getElementById("textarea").value;
    if (UserInput === key) {
        console.log("You have logged in as user 1");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "page.html";
    } else {
        window.alert("Failed to log in");
        localStorage.setItem("isLoggedIn", "false");
    }
}

