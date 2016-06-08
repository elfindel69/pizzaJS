
var authorizedToppings = [
  'tomato sauce',
  'mozzarella',
  'mushrooms',
  'ham',
  'eggs',
  'artichoke',
  'green olives',
  'onion',
  'sweet corn',
  'green peppers',
  'salami',
  'pepperoni',
  'peas'
]

class Pizza {
  constructor (name) {
    this.name = name
    this.toppings = []
  }
  setName (name) {
    this.name = name
  }

  addTopping (topping) {
    if (authorizedToppings.indexOf(topping) !== -1) {
      var arrTopping = this.toppings.filter(index => index === topping)
      console.log(arrTopping)
      if (arrTopping.length < 2) {
        this.toppings.push(topping)
      }
    }
  }

  removeTopping (topping) {
    var index = this.toppings.indexOf(topping)
    if (index !== -1) {
      this.toppings.splice(index, 1)
    }
  }
}

export default Pizza
