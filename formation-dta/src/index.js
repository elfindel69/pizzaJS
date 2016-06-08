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

pizzas.addPizza(pizza)
pizzas.addPizza(new Pizza('egg').addTopping('eggs'))

console.log(pizzas.with('eggs'))
