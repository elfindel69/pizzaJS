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
    return this.db.pizzas.add(pizza)
  }

  removePizza (id) {
    return this.db.pizzas.delete(id)
  }

  updatePizza (id, pizza) {
    return this.db.pizzas.update(id, pizza)
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
