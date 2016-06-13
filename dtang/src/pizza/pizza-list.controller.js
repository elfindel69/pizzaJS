export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout

    this.pizzas = [
      { name: 'Pizza 1', status: 0 },
      { name: 'Pizza 2', status: 0 },
      { name: 'Pizza 3', status: 0 },
      { name: 'Pizza 4', status: 0 },
      { name: 'Pizza 5', status: 0 }
    ]
  }

  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
    })
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 3000)
  }


  cookAllPizzas () {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return
    this.cookPizza(pizza)
      .then(this.cookAllPizzas.bind(this))
  }
}
