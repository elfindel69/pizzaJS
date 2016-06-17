export class PizzaListController {
  constructor ($timeout, PizzaService, $location) {
    this.$timeout = $timeout
    this.$location = $location
    this.PizzaService = PizzaService
    // tri par défaut
    this.predicate = 'name'
    this.getPizzas()
  }

  getPizzas () {
    return this.PizzaService.getPizzas()
    .then(pizzas => {
      this.pizzas = this.initPizzas(pizzas)
    }).catch(err => {
      window.alert('Liste non trouvée', err)
    })
  }

  initPizzas (pizzas) {
    return pizzas
      .map(pizza => {
        pizza._toppings = pizza.toppings2string()
        pizza._toppingsLength = (pizza.toppings || []).length
        return pizza
      })
  }

  addPizza () {
    this.$location.path('/pizza')
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 3000)
  }

  deletePizza (id) {
    console.log(id)
    this.PizzaService.deletePizza(id)
      .then((pizzas) => {
        this.pizzas = this.initPizzas(pizzas)
      }).catch(err => {
        window.alert('Pb lors de la suppression de la pizza', err)
      })
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

PizzaListController.$inject = ['$timeout', 'PizzaService', '$location']
