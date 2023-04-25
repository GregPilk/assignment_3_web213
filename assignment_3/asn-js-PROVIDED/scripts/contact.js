// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

let clearing = document.getElementById("submit-button");

function clear(){
    document.getElementById("contact-page").innerHTML = "";
    const thankYou = document.createElement("p");
    thankYou.innerText = "Thank you for your message!";
    document.getElementById("contact-page").appendChild(thankYou);
    document.getElementById("contact-page").style.fontSize = "24px";
}

clearing.addEventListener("click", clear);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

