const items = {
    name: '',
    price: '',
}

const name = document.querySelector('.name')
const price = document.querySelector('.price')
const btn = document.querySelector('.btn')
// const productName = document.querySelector('.product_name')
// const productPrice = document.querySelector('.product_name')

// function sayHi() {
    
    name.addEventListener('input', (event) => {
        localStorage.setItem('name', event.target.value)
        items.name = event.target.value
    })
    
    price.addEventListener('input', (event) => {
        items.price = event.target.value
        localStorage.setItem('price', event.target.value)
    })

btn.addEventListener('click', () => {
    localStorage.setItem('name', items.name)
    localStorage.setItem('price', items.price)
    // productName.innerHTML = `Nomi : ${localStorage.getItem('name')}`
})
// console.log(productName);
// document.querySelector('.products').innerHTML = 
