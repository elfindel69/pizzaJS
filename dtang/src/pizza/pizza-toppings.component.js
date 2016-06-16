
class PizzaToppingsComponentController {

  addTopping (topping) {
    this.onAddTopping({
      $event: { topping }
    })
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<',
    onAddTopping: '&'
  },
  templateUrl: 'pizza-toppings.html',
  controller: PizzaToppingsComponentController
}
