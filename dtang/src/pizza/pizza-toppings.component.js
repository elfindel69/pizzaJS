class PizzaToppingsComponentController {
  $onChanges (changes) {
    if (changes.allToppings && this.allToppings) {
      this.allToppings = Object.keys(this.allToppings)
    }
  }

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
