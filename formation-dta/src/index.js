import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizzaList = new PizzaList()
var pizza = null
var h2 = document.getElementById('pizza')
document.getElementById('createPizza')
  .addEventListener('click', function (evt) {
    var text = document.getElementById('label')
    pizza = new Pizza(text.value)
    h2.innerHTML = pizza.name + ' ' + pizza.toppings2string()
    console.log(pizza)
  }, false)

document.getElementById('eggs')
  .addEventListener('click', function (evt) {
    pizza.addTopping('eggs')
    console.log(pizza)
    h2.innerHTML = pizza.name + ' ' + pizza.toppings2string()
  }, false)

document.getElementById('mushrooms')
  .addEventListener('click', function (evt) {
    pizza.addTopping('mushrooms')
    console.log(pizza)
    h2.innerHTML = pizza.name + ' ' + pizza.toppings2string()
  }, false)

document.getElementById('tomato')
  .addEventListener('click', function (evt) {
    pizza.addTopping('tomato sauce')
    console.log(pizza)
    h2.innerHTML = pizza.name + ' ' + pizza.toppings2string()
  }, false)

document.getElementById('savePizza')
  .addEventListener('click', function (evt) {
    console.log(pizza)
    pizzaList.addPizza(pizza)
  }, false)

// pizzaList.pizzas[0]
//   .cook(2000)
//   .then((pizza) => {
//     console.log('Bing ! Pizza cuite', pizza)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// setTimeout(function () {
//   pizzaList.pizzas[0]
//     .cook(1000)
//     .then((pizza) => {
//       console.log('Bing ! Pizza cuite', pizza)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }, 1000)

// setTimeout(function () {
//   pizzaList.pizzas[0]
//     .cook(1000)
//     .then(() => {
//       console.log('Bing ! Pizza cuite')
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }, 2500)
