var cocontanier=document.querySelector('#contanier')

var icon=document.querySelector('#icon')
var btn=document.querySelector('#btn')

btn.addEventListener("click",()=> {
    
    if (btn.innerHTML === 'ON') {
        // Switch to light mode
        contanier.classList.remove("dark");
        contanier.classList.add("light");
        btn.textContent = "OFF";
        icon.classList.remove("ri-lightbulb-ai-fill");
        icon.classList.add("ri-lightbulb-line");
    } 
    else {
        // Switch to dark mode
        contanier.classList.remove("light");
        contanier.classList.add("dark");
        btn.textContent = "ON";
        icon.classList.remove("ri-lightbulb-fill");
        icon.classList.add("ri-lightbulb-ai-fill");
    }

});