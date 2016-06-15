import { Pizza } from './pizza'

export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
  }

  getPizzas () {
    return this.$http.get('http://localhost:1337/pizzas')
    .then(({data: pizzas}) => {
      this.pizzas = pizzas.map(pizzaJson => new Pizza(pizzaJson))
      return this.pizzas
    })
  }

  addPizza (pizza) {
    return this.$http.post(
      'http://localhost:1337/pizzas',
       pizza // ou pizza.json()
    )
    .then(({data: pizzaJson}) => {
      pizza = new Pizza(pizzaJson)
      this.pizzas.push(pizza)
      return this.pizzas
    })
  }

  deletePizza (id) {
    return this.$http.delete(
      'http://localhost:1337/pizzas/' + id
    )
    .then(() => {
      this.pizzas.splice(id, 1)
      return this.pizzas
    })
  }

  updatePizza (pizza) {
    return this.$http.put(
      'http://localhost:1337/pizzas/' + pizza.id,
      pizza
    )
    .then(() => {
      this.pizzas[pizza.id] = pizza
      return this.pizzas
    })
  }
}

PizzaService.$inject = ['$timeout', '$http']
