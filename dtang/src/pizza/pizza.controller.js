import { toppings } from './toppings'

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
      this.pizza = {
        name: 'Pizza',
        toppings: []
      }
    }

    PizzaService.getToppings()
      .then(toppings => {
        this.toppings = toppings
      })
  }

  savePizza (form) {
    if (form.$invalid) {
      window.alert('ERROR !')
      return
    }
    var keys = Object.keys(toppings)
    console.log(keys)
     // transformation toppings -> ['eggs', 'mushrooms']
    this.pizza.toppings = this.pizza.toppings
    .reduce((acc, v, i) => {
      if (v) acc.push(keys[i])
      return acc
    }, [])

    console.log('save', this.pizza.toppings)
  }

  updatePizza (pizzaForm) {
    if (pizzaForm.$invalid) {
      window.alert('ERROR !')
      return
    }
    this.PizzaService.updatePizza(this.pizza).then(() => {
      this.$location.path('/')
    })
  }
}

PizzaController.$inject = ['PizzaService', '$routeParams', '$location']

