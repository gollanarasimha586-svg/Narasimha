function addCard(){

const cards = document.querySelector(".cards");

const newCard = document.createElement("div");
newCard.className = "card";

newCard.innerHTML = `
<div class="image-box">Image</div>
<p>Line 1</p>
<p>Line 2</p>
`;

cards.appendChild(newCard);

}