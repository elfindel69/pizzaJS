import { toppings as authorizedToppings } from './toppings.js'

export class Pizza {

  constructor (name, toppings = []) {
    this.name = name
    this.toppings = toppings
  }
  setName (name) {
    this.name = name
    return this
  }

  addTopping (topping) {
    if (!this.isLegalTopping(topping)) return this

    if (this.toppings.filter(index => index === topping).length > 1) return this

    this.toppings.push(topping)

    return this
  }

  isLegalTopping (topping) {
    return authorizedToppings.includes(topping)
  }

  removeTopping (topping) {
    const index = this.toppings.indexOf(topping)
    if (index !== -1) {
      this.toppings.splice(index, 1)
    }
    return this
  }

  displayToppings () {
    return this
  }
}
