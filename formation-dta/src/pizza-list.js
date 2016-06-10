import Dexie from 'dexie'

export class PizzaList {
  constructor () {
    this.db = new Dexie('pizzeria')
    this.db.version(1).stores({
      pizzas: '++id, name'
    })
    this.db.open()
  }

  addPizza (pizza) {
    this.db.pizzas.add(pizza).then((id) => console.log(`la pizza ${id} a bien à été enregistrée`))
  }

  removePizza (id) {
    this.db.pizzas.delete(id).then((id) => console.log(`la pizza ${id} a bien à été supprimée`))
  }

  getPizzas () {
    return this.db.pizzas.toArray()
  }

  with (topping) {
    if (!topping) return this.getPizzas()
    return this.getPizzas()
      .then(pizzas => pizzas.filter(pizza => pizza.toppings.indexOf(topping) !== -1))
  }
}
