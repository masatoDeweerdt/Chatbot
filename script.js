const astroBot = "Astro Bot :";
const user = "Vous :";


document.getElementById("send").addEventListener("click", () => {
    let node = document.createElement("p");
    let target = document.getElementsByClassName("chatBox")[0];
    let textnode = document.createTextNode(document.getElementById("inputBox").value);
    console.log (node);
    console.log (target);
    console.log (textnode);
    node.appendChild(textnode);
    target.appendChild(node);
});