window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
       
        window.location.href = "index.html";
    } else if (isLoggedIn === "true") {
        alert("you have logged in")
    } else {
        alert("There was a error")
    }

    if (isPageReloaded) {
        localStorage.setItem("isLoggedIn", "false")
 
    } else {
        console.log("This is the first load, not a refresh.");
        sessionStorage.setItem("isPageReloaded", "true"); 
    };
};
