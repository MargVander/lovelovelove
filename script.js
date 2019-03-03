let back = document.getElementsByTagName("html")[0];
console.log(back);
let onMouse = function(event) {
  let heart = document.createElement("div");
  heart.innerHTML = "♥"
  heart.className = "heart";
  document.body.appendChild(heart);
        heart.style.top = event.clientY + "px";
        heart.style.left = event.clientX + "px";

};

let onClick = function(event) {
  let stars = document.createElement("div");
  stars.innerHTML = "★"
  stars.className = "stars"
  document.body.appendChild(stars);
        stars.style.top = event.clientY + "px";
        stars.style.left = event.clientX + "px";
}

back.addEventListener("mousemove", onMouse);
back.addEventListener("click", onClick)
