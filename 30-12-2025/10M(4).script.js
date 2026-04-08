var btn = document.querySelector('#btn')
var contanier = document.querySelector('#contanier')

var cards = [
{
    banner:'https://i.pinimg.com/originals/62/97/8f/62978f53c62eb778d8543cb7af0e177d.jpg',
    Name:'Chepauk Stadium',
    About:'M. A. Chidambaram Stadium, commonly known as Chepauk Stadium. It hosts matches of the Indian mens cricket team and Home Ground of IPL team CHENNAI SUPER KINGS.'
},
{
    banner:'https://st1.latestly.com/wp-content/uploads/2023/04/Wankhede-Stadium-1.jpg',
    Name:'Wankhede Stadium',
    About:'Wankhede Stadium is an international cricket stadium in Mumbai, India. It hosted the 2011 Cricket World Cup Final and it is the Home Ground for the IPL Team MUMBAI INDIANS.'
},
{
    banner:'http://d3e1m60ptf1oym.cloudfront.net/2ad89dfd-f619-4951-99cb-98a79b1f3158/LordsCricketGround-kd12711_uxga.jpg',
    Name:'Lords Cricket Ground',
    About:'Lords Cricket Ground it is the first oldest cricket stadium in the world came into the use from 18th century  '
}
]

console.log(cards)

btn.addEventListener('click',()=>{

    cards.forEach((card,idx)=>{

        let div = document.createElement('div')
        div.classList.add('card')

        // image
        let img = document.createElement('img')
        img.src = card.banner
        div.appendChild(img)

        // title
        let title = document.createElement('h3')
        title.innerHTML = card.Name
        div.appendChild(title)

        // about
        let about = document.createElement('p')
        about.innerHTML = card.About
        div.appendChild(about)

        contanier.appendChild(div)

    })

})