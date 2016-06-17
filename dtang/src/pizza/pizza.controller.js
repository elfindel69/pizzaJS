import { Pizza } from './pizza'
export class PizzaController {
  constructor (PizzaService, $routeParams, $location) {
    this.PizzaService = PizzaService
    this.$location = $location

    if ($routeParams.id) {
      this.pizza = this.PizzaService.getPizza($routeParams.id)
      .then((pizza) => {
        this.pizza = pizza
      })
    } else {
      this.pizza = new Pizza({
        name: 'Pizza',
        toppings: []
      })
    }

    PizzaService.getToppings()
      .then(toppings => {
        this.toppings = toppings
      })
  }

  addTopping (event) {
    this.pizza.addTopping(event.topping)
  }

  removeTopping (event) {
    this.pizza.removeTopping(event.id)
  }

  savePizza (event) {
    if (event.pizzaForm.$invalid) {
      window.alert('ERROR !')
      return
    }
    this.PizzaService.addPizza(this.pizza).then(() => {
      console
      this.$location.path('/')
    })
  }

  updatePizza (event) {
    if (event.pizzaForm.$invalid) {
      window.alert('ERROR !')
      return
    }
    this.PizzaService.updatePizza(this.pizza).then(() => {
      this.$location.path('/')
    })
  }
}

PizzaController.$inject = ['PizzaService', '$routeParams', '$location']

