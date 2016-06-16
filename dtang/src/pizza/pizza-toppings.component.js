class PizzaToppingsComponentController {

  removeTopping (id) {
    this.toppings.splice(id, 1)
  }

  addTopping (topping) {
    this.toppings.push(topping)
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<'
  },
  templateUrl: 'pizza-toppings.html',
  controller: PizzaToppingsComponentController
}
