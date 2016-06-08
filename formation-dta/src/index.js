import Pizza from './pizza.js'


var p = new Pizza('toto')
console.log(p)

p.setName('titi')
console.log(p)

var isEven = function (v) {
  return v % 2 === 0
}

var filtre = function (array, condition) {
  return array.reduce(function (acc, index) {
    if (condition(index)) {
      acc.push(index)
    }
    return acc
  }
  , [])
}

var evens1 = [1, 2, 3, 4].filter(isEven)
var evens2 = filtre([1, 2, 3, 4], isEven)
var odds2 = filtre([1, 2, 3, 4], function (item) {
  return item % 2 !== 0
})

console.log(evens1, evens2, odds2)
