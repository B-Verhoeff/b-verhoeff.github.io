const blocks = document.querySelectorAll('.block');
const scoreElement = document.querySelector('.hierkomtdescore');

let holes = document.querySelectorAll('.hole');
let currentIndex = 0;
let score = 0;

window.onload = function() {
  var username = prompt("Vul je gebruikersnaam in");
  var usernameContainer = document.querySelector(".username-container");
  var usernameDiv = document.querySelector(".username");
  usernameDiv.textContent = username;
  usernameContainer.style.width = usernameDiv.offsetWidth + "px";
};
function changeMole() {
  for (let i = 0; i < holes.length; i++) {
    const hole = holes[i];
    hole.classList.remove("mole");
  }

  let newIndex = currentIndex;
  newIndex = Math.floor(Math.random() * holes.length);
  holes[newIndex].classList.add('mole'); 
  currentIndex = newIndex;
}

function updateScore() {
  score++;
  scoreElement.innerHTML = score;

  if (score === 51) {
    window.location.href = "eindscherm.html";
  }
}

setInterval(changeMole, 600);

holes.forEach(function(hole) {
  hole.addEventListener("click", function () {
    if(hole.classList.contains("mole")) {
      updateScore();
      console.log("Je hebt geklikt")
    }
  });
});
const speelopnieuw = document.querySelector(".speelopnieuw")
speelopnieuw.addEventListener("click", function () {
  window.location.href = "wam.html";
})