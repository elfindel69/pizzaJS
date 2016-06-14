import { Pizza } from './pizza'
import { toppings } from './toppings'

export class PizzaController {
  constructor () {
    this.pizza = {
      name: 'Pizza',
      toppings: []
    }
    this.toppings = toppings
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
}

