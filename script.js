const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const body = document.querySelector('#body')
const text = document.querySelector('#text')
const box = document.querySelector('#box img')



btn.onclick = () => {
    body.classList.toggle('black')
}
btn2.onclick = () => {
    box.classList.toggle('close')
}
btn3.onclick = () => {
    text.classList.toggle('unvisible')
}
btn4.onclick = () => {
    text.classList.toggle('red')
}
