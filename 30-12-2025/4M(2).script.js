var box = document.querySelector('#box')
var btn = document.querySelector('#btn')
var count = 1

btn.addEventListener('click', () => {

    let btn1 = document.createElement('button')
    btn1.innerHTML = `submit-${count}`
    count += 1

    btn1.addEventListener('click', () => {
        btn1.remove()
    })

    box.appendChild(btn1)

})