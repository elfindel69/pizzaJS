
class EditPizzaComponentController {

  $onChanges (changes) {
    if (changes.pizza && this.pizza.id) {
      this.name = 'Édition Pizza'
    } else {
      this.name = 'Nouvelle Pizza'
    }
  }
  updatePizza (pizzaForm) {
    this.onEditPizza({
      $event: { pizzaForm }
    })
  }

  addTopping (topping) {
    this.onAddTopping({
      $event: topping
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

export const EditPizzaComponent = {
  bindings: {
    toppings: '<',
    onAddTopping: '&',
    onRemoveTopping: '&',
    pizza: '<',
    onEditPizza: '&'
  },
  templateUrl: 'pizza-edit.html',
  controller: EditPizzaComponentController
}
