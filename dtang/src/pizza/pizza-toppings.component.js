
class PizzaToppingsComponentController {

  addTopping (topping) {
    this.onAddTopping({
      $event: { topping }
    })
  }

  removeTopping (id) {
    this.onRemoveTopping({
      $event: { id }
    })
  }
}

export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<',
    onAddTopping: '&',
    onRemoveTopping: '&'
  },
  templateUrl: 'pizza-toppings.html',
  controller: PizzaToppingsComponentController
}
