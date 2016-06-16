import { Pizza } from './pizza'

const url = 'http://localhost:1337/pizzas'
const urlToppings = 'http://localhost:1337/toppings'

let toppings = null

export class PizzaService {
  constructor ($timeout, $http, $q) {
    this.$timeout = $timeout
    this.$http = $http
    this.$q = $q
  }

  getPizzas () {
    return this.$http.get(url)
      .then(({data: pizzas}) => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  getPizza (id) {
    return this.$http.get(url + '/' + id)
      .then(response => new Pizza(response.data))
  }

  updatePizza (pizza) {
    return this.$http.put(url + '/' + pizza.id, pizza)
  }

  addPizza (pizza) {
    return this.$http.post(
      url,
      pizza // ou pizza.json() si besoin
    ).then(response => {
      return this.getPizzas()
    })
  }

  getToppings () {
    if (toppings) {
      return this.$q.resolve(toppings)
    } else {
      return this.$http.get(urlToppings)
        .then(response => {
          toppings = response.data
          return toppings
        })
    }
  }
}

PizzaService.$inject = ['$timeout', '$http', '$q']
