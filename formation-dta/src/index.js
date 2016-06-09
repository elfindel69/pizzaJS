import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizza = new Pizza('toto')
var pizzas = new PizzaList()

pizza.setName('4 fromages')
  .addTopping('salami')
  .addTopping('ketchup')
  .addTopping('onion')
  .addTopping('green olives')
  .addTopping('mushrooms')
  .removeTopping('green olives')
  .addTopping('mushrooms')
  .addTopping('mushrooms')
  .addTopping('mushrooms')
  .addTopping('mushrooms')
  .addTopping('eggs')
console.log(pizza)
console.log(pizza.toppings2string())

pizzas.addPizza(pizza)
pizzas.addPizza(new Pizza('egg').addTopping('eggs'))

console.log(pizzas.with('eggs'))

const h1 = document.createElement('h1')
h1.innerHTML = 'Pizzas'

const ul = document.createElement('ul')
pizzas.pizzas.forEach(pizza => {
  const li = document.createElement('li')
  li.innerHTML = pizza.name
  ul.appendChild(li)
})
document.body.appendChild(h1)
document.body.appendChild(ul)
