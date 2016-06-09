import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizzaList = new PizzaList()
var pizza = null

document.getElementById('createPizza')
  .addEventListener('click', function (evt) {
    pizza = new Pizza('margherita')
    console.log(pizza)
  }, false)

document.getElementById('eggs')
  .addEventListener('click', function (evt) {
    pizza.addTopping('eggs')
    console.log(pizza)
  }, false)

document.getElementById('mushrooms')
  .addEventListener('click', function (evt) {
    pizza.addTopping('mushrooms')
    console.log(pizza)
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
