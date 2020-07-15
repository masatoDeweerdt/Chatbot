const astroBot = "Astro Bot : ";
const user = "Vous : ";
let randomNum = getRandomInt(3);
let bonjour = ["Hello, Im Astro Bot, are you fine today ?", "Welcome to my chat, Im Astro Bot, are you alright",
    "<== Here is my name, Welcome, Are you a human ?"
];
let init = document.createElement("p"); //création de l'élément <p>
let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
let textnode = document.createTextNode(astroBot + bonjour[randomNum]); // crée le string Vous : + input de l'user
init.appendChild(textnode); // met le text en child de <p>
init.setAttribute('class', "bot");
targetInit.appendChild(init); //met le <p> en child dans la div ChatBox
let counterQuestion = 0;
let retour = 0;

function getRandomInt(max) { // fonction génère un entier aléatoire
    return Math.floor(Math.random() * Math.floor(max));
}

function test(reponse) {

    if (reponse === "yes") {
        counterQuestion++;
        retour++;
    } else if (reponse === "no") {
        counterQuestion++;
    } else {

    }
}

function annif(reponse) {

    if (reponse === "yes") {
        let randomNum = getRandomInt(3);
        let quest = ["Is it your birthday today ?", "Is today the date remembering your birth ?",
            "Can it be your birthday today ?"
        ];
        let init = document.createElement("p"); //création de l'élément <p>
        let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        let textnode = document.createTextNode(astroBot + quest[randomNum]); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

    } else if (reponse === "no") {

    } else {

    }
}

function crime(reponse) {

    if (reponse === "yes") {
        counterQuestion++;
        
    } else if (reponse === "no") {
        counterQuestion++;
    } else {

    }
}

document.getElementById("send").addEventListener("click", () => {
    let node = document.createElement("p"); //création de l'élément <p>
    let target = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
    reponse1 = document.getElementById("inputBox").value;
    let textnode = document.createTextNode(user + reponse1); // crée le string Vous : + input de l'user
    node.appendChild(textnode); // met le text en child de <p>
    node.setAttribute('class', "user");
    target.appendChild(node); //met le <p> en child dans la div ChatBox

    test(reponse);

    if ((counterQuestion = 1) && (retour = 1)) {
        annif(reponse);
    } else if (counterQuestion = 1) {
        crime(reponse);
    } else if ((counterQuestion = 2) && (retour = 2)){

    }
    else if (counterQuestion = 2){

    }
    else {

    }

});