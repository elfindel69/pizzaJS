
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

  droppedAdd () {
    console.log(this.draggedTopping)
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
