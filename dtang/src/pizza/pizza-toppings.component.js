
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

  dropped () {
    this.addTopping(this.draggedTopping)
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
