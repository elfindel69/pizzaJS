import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'
import { toppings } from './toppings.js'

var pizzaList = new PizzaList()
var pizza = null
var h2 = document.getElementById('pizza')
var list = document.getElementById('list')
var text = document.getElementById('label')

Object.keys(toppings).forEach(topping => {
  var toppingButton = document.createElement('button')
  toppingButton.innerHTML = topping
  toppingButton.addEventListener('click', evt => {
    pizza.addTopping(topping)
    console.log(pizza)
    h2.innerHTML = pizza.name + ' ' + pizza.toppings2string()
  })
  list.appendChild(toppingButton)
})

document.getElementById('createPizza')
  .addEventListener('click', function (evt) {
    pizza = new Pizza(text.value)
    list.style.visibility = 'visible'
    h2.innerHTML = pizza.name + ' ' + pizza.toppings2string()
    console.log(pizza)
  }, false)

document.getElementById('savePizza')
  .addEventListener('click', function (evt) {
    console.log(pizza)
    list.style.visibility = 'hidden'
    text.value = ''
    pizzaList.addPizza(pizza)
  }, false)


var tabPizzas = document.getElementById('tabPizzas')
tabPizzas.style.border = '1px solid black'

pizzaList.getPizzas()
.then(pizzas => {
  return pizzas.map(pizza => {
    return new Pizza(pizza.name, pizza.toppings)
  })
})
.then(pizzas => pizzas.forEach(
  pizza => {
    var tr = document.createElement('tr')

    var tdName = document.createElement('td')
    tdName.style.border = '1px solid black'
    tdName.innerHTML = pizza.name
    tr.appendChild(tdName)

    var tdToppings = document.createElement('td')
    tdToppings.style.border = '1px solid black'
    tdToppings.innerHTML = pizza.toppings2string()
    tr.appendChild(tdToppings)
    
    tabPizzas.appendChild(tr)
  }
))

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
