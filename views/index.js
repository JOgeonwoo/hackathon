function zoomIn(event) {
    document.getElementById("gift-icon").src = "https://cdn-icons-png.flaticon.com/128/2420/2420548.png"
    event.target.style.transform = "scale(1.2)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
}
function zoomOut(event) {
    document.getElementById("gift-icon").src = "https://cdn-icons-png.flaticon.com/128/2420/2420548.png"
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
}
function nextPage1() {
    location.href = "Step1.html";
}
function nextPage2() {
    window.location.href = 'login.html';
}
function nextPage3() {
    location.href = "signup.html";
}
