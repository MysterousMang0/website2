console.log('hello world');

function login() {
    var UserInput = document.getElementById("textarea").value;
    if (UserInput === "12345") {
        console.log("You have logged in as user 1");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "page.html";
    } else {
        window.alert("Failed to log in");
        localStorage.setItem("isLoggedIn", "false");
    }
}

