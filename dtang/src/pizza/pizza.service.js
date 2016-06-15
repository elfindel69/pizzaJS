import { Pizza } from './pizza'

const pizzas = [
  new Pizza({ name: 'Pizza 1', status: 0, toppings: ['eggs', 'mushrooms'] }),
  new Pizza({ name: 'Pizza 2', status: 1, toppings: [] }),
  new Pizza({ name: 'Pizza 3', status: 0, toppings: ['eggs', 'eggs', 'mushrooms'] }),
  new Pizza({ name: 'Pizza 4', status: 1 }),
  new Pizza({ name: 'Pizza 5', status: 0 })
]

export class PizzaService {
  constructor ($timeout) {
    this.$timeout = $timeout
  }
  getPizzas () {
    return this.$timeout(2000).then(() => pizzas)
  }
}

PizzaService.$inject = ['$timeout']
