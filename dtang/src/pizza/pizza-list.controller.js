import { Pizza } from './pizza'

export class PizzaListController {
  constructor ($timeout, PizzaService) {
    this.$timeout = $timeout
    this.PizzaService = PizzaService
    // tri par défaut
    this.predicate = 'name'

    PizzaService.getPizzas()
      .then(pizzas => {
        this.pizzas = pizzas
          .map(pizza => {
            pizza._toppings = pizza.toppings2string()
            pizza._toppingsLength = (pizza.toppings || []).length
            return pizza
          })
      })
  }

  addPizza () {
    this.PizzaService.addPizza(new Pizza({
      name: 'new pizza'
    })).then(pizzas => { this.pizzas = pizzas })
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

  keep () {
    return function (pizza) {
      if (!this.query) return true
      return pizza.name.indexOf(this.query) !== -1 ||
      (pizza.toppings || []).join('').indexOf(this.query) !== -1
    }.bind(this)
  }
}

PizzaListController.$inject = ['$timeout', 'PizzaService']
