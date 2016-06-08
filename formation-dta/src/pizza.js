import { toppings as authorizedToppings } from './toppings.js'

export class Pizza {

  constructor (name, toppings = []) {
    this.name = name
    this.toppings = toppings
  }
  setName (name) {
    this.name = name
  }

  addTopping (topping) {
    if (!this.isLegalTopping(topping)) return

    if (this.toppings.filter(index => index === topping).length > 1) return
    this.toppings.push(topping)
  }

  isLegalTopping (topping) {
    return authorizedToppings.includes(topping)
  }

  removeTopping (topping) {
    var index = this.toppings.indexOf(topping)
    if (index !== -1) {
      this.toppings.splice(index, 1)
    }
  }

  displayToppings () {
   // return this.toppings.reduce
  }
}
