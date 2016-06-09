
export class PizzaList {
  constructor () {
    this.pizzas = []
  }

  addPizza (pizza) {
    this.pizzas.push(pizza)
  }

  with (topping) {
    return this.pizzas.filter(pizza => pizza.toppings.includes(topping))
  }

  search (topping) {
    return pizzas => pizzas.filter(pizza => pizza.toppings.includes(topping))
  }
}
