import { Pizza } from './pizza'

export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http({
      url: 'http://192.168.99.2:1337/pizzas',
      method: 'GET'
    })
    .then(response => {
      return response.data
    })
    .then(pizzas => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  addPizza (pizza) {
    return this.$timeout(1000).then(() => {
      this.pizzas.push(pizza)
      return this.pizzas
    })
  }
}

PizzaService.$inject = ['$timeout', '$http']
