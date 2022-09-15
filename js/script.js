//navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


//log-in page
var card = document.getElementById("card");

function openRegister() {
      card.style.transform = "rotateY(-180deg)";
}

function openLogin() {
      card.style.transform = "rotatey(0)";
}

//user auth
