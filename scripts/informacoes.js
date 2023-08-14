//Expansão dos accordions
const accordion = document.getElementsByClassName('accordion');

function toggleAccordion() {
  let panel = this.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', toggleAccordion)
}