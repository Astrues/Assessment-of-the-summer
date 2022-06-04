change()
window.addEventListener("resize", change);
function change() {
    let width = document.documentElement.clientWidth;
    let html = document.querySelector("html");
    let fs = width / 100;
    if (fs > 7.5) {
        fs = 7.5;
    }
    if (fs < 3.2) {
        fs = 3.2;
    }
    html.style.fontSize = fs + 'px'
}