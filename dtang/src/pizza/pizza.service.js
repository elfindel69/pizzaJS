import { Pizza } from './pizza'

export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http.get('http://192.168.99.2:1337/pizzas')
    .then(response => {
      return response.data
    })
    .then(pizzas => {
      this.pizzas = pizzas.map(pizzaJson => new Pizza(pizzaJson))
      return this.pizzas
    })
  }

  addPizza (pizza) {
    return this.$http.post(
      'http://192.168.99.2:1337/pizzas',
       pizza // ou pizza.json()
    )
    .then(response => {
      return response.data
    })
    .then(pizzaJson => {
      pizza = new Pizza(pizzaJson)
      this.pizzas.push(pizza)
      return this.pizzas
    })
  }
}

PizzaService.$inject = ['$timeout', '$http']
