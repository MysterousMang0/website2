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

function ShowInfoButton(){
    clickedInfoButton = true;
    window.location.href = "Information.html";
}

window.addEventListener("beforeunload",function(event) {
    if (!clickedInfoButton) {
    localStorage.setItem("isLoggedIn", "false");
    console.log("User left the page, item set to false");
    } else {
    console.log("Navigating to Information page, item NOT set to false");

}})
