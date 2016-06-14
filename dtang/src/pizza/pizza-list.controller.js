import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout

    this.pizzas = [
      new Pizza({ name: 'Pizza 1', status: 0, toppings: ['eggs', 'mushrooms'] }),
      new Pizza({ name: 'Pizza 2', status: 0, toppings: [] }),
      new Pizza({ name: 'Pizza 3', status: 0, toppings: ['eggs', 'eggs', 'mushrooms'] }),
      new Pizza({ name: 'Pizza 4', status: 0 }),
      new Pizza({ name: 'Pizza 5', status: 0 }),
      { name: 'Pizza 5', status: 0, toppings: ['eggs'] }
    ]
  }

  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
    })
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 3000)
  }

  cookPizzas () {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return
    this.cookPizza(pizza)
      .then(this.cookPizzas.bind(this))
  }

}
