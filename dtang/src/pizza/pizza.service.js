import { Pizza } from './pizza'

const url = 'http://localhost:1337/pizzas'

export class PizzaService {
  constructor ($timeout, $http) {
    this.$timeout = $timeout
    this.$http = $http
    this.getPizzas()
  }

  getPizzas () {
    return this.$http.get(url)
    .then(({data: pizzas}) => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  addPizza (pizza) {
    return this.$http.post(
      url,
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
      url + '/' + id
    )
    .then(() => {
      this.pizzas.splice(id, 1)
      return this.pizzas
    })
  }

  getPizza (id) {
    return this.$http.get(url + '/' + id)
      .then(response => response.data)
  }


  updatePizza (pizza) {
    return this.$http.put(url + '/' + pizza.id, pizza)
  }
}

PizzaService.$inject = ['$timeout', '$http']
