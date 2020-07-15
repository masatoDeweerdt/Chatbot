const astroBot = "Astro Bot : ";
const user = "Vous : ";

let init = document.createElement("p"); //création de l'élément <p>
let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
let textnode = document.createTextNode(astroBot + "Hello, Im Astro Bot, are you fine today ?"); // crée le string Vous : + input de l'user
init.appendChild(textnode); // met le text en child de <p>
targetInit.appendChild(init); //met le <p> en child dans la div ChatBox


document.getElementById("send").addEventListener("click", () => {
    let node = document.createElement("p"); //création de l'élément <p>
    let target = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
    let textnode = document.createTextNode(user + document.getElementById("inputBox").value); // crée le string Vous : + input de l'user
    node.appendChild(textnode); // met le text en child de <p>
    target.appendChild(node); //met le <p> en child dans la div ChatBox


});