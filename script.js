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
let retry = 0;

function getRandomInt(max) { // fonction génère un entier aléatoire
    return Math.floor(Math.random() * Math.floor(max));
}

function test(reponse) { // test de la réponse si oui ou non ou autre

    if (reponse === "yes") {
        counterQuestion++;
    } else if (reponse === "no") {
        counterQuestion += 3;
    } else {
        other(reponse);
    }
}

function annif(reponse) { //1ère question si oui
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

}

function finish(reponse) { //réponse à 1ère question
    if (reponse === "yes") {

        let init = document.createElement("p"); //création de l'élément <p>
        let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        let textnode = document.createTextNode(astroBot + "Happy Birthday to you !"); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

        init = document.createElement("p"); //création de l'élément <p>
        targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        textnode = document.createTextNode(astroBot + "Go do a party, See you next time."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

    } else if (reponse === "no") {

        let init = document.createElement("p"); //création de l'élément <p>
        let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        let textnode = document.createTextNode(astroBot + "What a shame."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

        init = document.createElement("p"); //création de l'élément <p>
        targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        textnode = document.createTextNode(astroBot + "Come back see to me when it's your birthday."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

    } else {
        other(response);
    }
}

function crime(reponse) { //2e question si non
    counterQuestion += 2;
    let randomNum = getRandomInt(3);
    let quest = ["Have you commited a crime ?", "Are you a criminal ?",
        "Are you on the wrong side of justice ?"
    ];
    let init = document.createElement("p"); //création de l'élément <p>
    let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
    let textnode = document.createTextNode(astroBot + quest[randomNum]); // crée le string Vous : + input de l'user
    init.appendChild(textnode); // met le text en child de <p>
    init.setAttribute('class', "bot");
    targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

}

function finish2(reponse) { //réponse 2e question
    if (reponse === "yes") {

        let init = document.createElement("p"); //création de l'élément <p>
        let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        let textnode = document.createTextNode(astroBot + "Unbelievable, please don't move anywhere."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

        init = document.createElement("p"); //création de l'élément <p>
        targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        textnode = document.createTextNode(astroBot + "Astro Bot is calling the police."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

    } else if (reponse === "no") {

        let init = document.createElement("p"); //création de l'élément <p>
        let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        let textnode = document.createTextNode(astroBot + "That's good to hear."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

        init = document.createElement("p"); //création de l'élément <p>
        targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        textnode = document.createTextNode(astroBot + "Im proud of you, continue like that."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox

    } else {
        other(retry);
    }
}

function other(retry) { //to do ***** switch

    if (retry=3){
        let init = document.createElement("p"); //création de l'élément <p>
        let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
        let textnode = document.createTextNode(astroBot + "Are you able to comprehend human speech ? I don't have time for you, see you."); // crée le string Vous : + input de l'user
        init.appendChild(textnode); // met le text en child de <p>
        init.setAttribute('class', "bot");
        targetInit.appendChild(init); //met le <p> en child dans la div ChatBox
    }
    else{
    let init = document.createElement("p"); //création de l'élément <p>
    let targetInit = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
    let textnode = document.createTextNode(astroBot + "That's not a yes or no, please retry."); // crée le string Vous : + input de l'user
    init.appendChild(textnode); // met le text en child de <p>
    init.setAttribute('class', "bot");
    targetInit.appendChild(init); //met le <p> en child dans la div ChatBox
}

}

document.getElementById("send").addEventListener("click", () => {
    let node = document.createElement("p"); //création de l'élément <p>
    let target = document.getElementsByClassName("chatBox")[0]; //défini la cible chatBox
    let reponse = document.getElementById("inputBox").value;
    let textnode = document.createTextNode(user + reponse); // crée le string Vous : + input de l'user
    node.appendChild(textnode); // met le text en child de <p>
    node.setAttribute('class', "user");
    target.appendChild(node); //met le <p> en child dans la div ChatBox

    test(reponse);
    console.log(counterQuestion);
    console.log(retry);

    switch (counterQuestion) {
        case 1:
            annif(reponse);
            break;
        case 2:
            finish(reponse);
            break;
        case 3:
            crime(reponse);
            break;
        case 4:
            finish(reponse);
            break;
        case 6:
            finish2(reponse);
            break;
        case 8:
            finish2(reponse);
            break;
        default:

            break;
    }

});