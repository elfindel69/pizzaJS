import Pizza from './pizza.js'

var p = new Pizza('toto')

p.setName('titi')
p.addTopping('salami')
p.addTopping('ketchup')
p.addTopping('onion')
p.addTopping('green olives')
p.addTopping('mushrooms')
console.log(p)
p.removeTopping('green olives')
console.log(p)
p.addTopping('mushrooms')
p.addTopping('mushrooms')
p.addTopping('mushrooms')
p.addTopping('mushrooms')
console.log(p)
