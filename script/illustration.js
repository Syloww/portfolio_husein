let text = document.querySelector(".affiche");
let btn = document.querySelector(".btn_affiche");

btn.addEventListener("click", affichage);

function affichage(){
    text.classList.toggle("vu");
}