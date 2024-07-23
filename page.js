window.onload = function() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
       
        window.location.href = "index.html";
    } else if (isLoggedIn === "true") {
        alert("you have logged in")
    } else {
        alert("There was a error")
    }
};

window.addEventListener("beforeunload", function() {
    localStorage.setItem("isLoggedIn", "false");
    console.log("item set to false");
});