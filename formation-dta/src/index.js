import { Pizza } from './pizza.js'
import { PizzaList } from './pizza-list.js'

var pizzaList = new PizzaList()

pizzaList.addPizza(
  new Pizza('Margherita')
    .addTopping('tomato sauce')
    .addTopping('mozzarella')
)

pizzaList.addPizza(
  new Pizza('Funghi')
    .addTopping('tomato sauce')
    .addTopping('mozzarella')
    .addTopping('mushrooms')
)

pizzaList.pizzas[0]
  .cook(2000)
  .then((pizza) => {
    console.log('Bing ! Pizza cuite', pizza)
  })
  .catch(err => {
    console.log(err)
  })

setTimeout(function () {
  pizzaList.pizzas[0]
    .cook(1000)
    .then((pizza) => {
      console.log('Bing ! Pizza cuite', pizza)
    })
    .catch(err => {
      console.log(err)
    })
}, 1000)

setTimeout(function () {
  pizzaList.pizzas[0]
    .cook(1000)
    .then(() => {
      console.log('Bing ! Pizza cuite')
    })
    .catch(err => {
      console.log(err)
    })
}, 2500)
