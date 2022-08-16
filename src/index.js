let hrBar = document.getElementById("nomadHr");
hrBar.style.transition = "all 2s"
let home = document.getElementById("home");
home.addEventListener("click", (e) => {
    console.log(hrBar.style.left)
        hrBar.style.width = "16%";
        hrBar.style.left = "0%";
});

let rental = document.getElementById("rental");
rental.addEventListener("click", (e) => {
    console.log(hrBar.style.left);
    hrBar.style.width = "17%";
    hrBar.style.left = "16%";
});

let login = document.getElementById("login");
login.addEventListener("click", (e) => {
    console.log(hrBar.style.left);
    hrBar.style.width = "18.7%";
    hrBar.style.left = "33.5%";
})

let sign = document.getElementById("sign-up");
sign.addEventListener("click", (e) => {
    console.log(hrBar.style.left);
    hrBar.style.width = "17%";
    hrBar.style.left = "52.7%";
})