const describe = window.describe
const it = window.it
const expect = window.expect

import {fixtures} from './fixtures'
import {Pizza} from '../src/pizza/pizza'
describe('Test du filtre toppings', function () {
  var toppingsFilter

  beforeEach(angular.mock.module('dtang'))

  beforeEach(inject(function ($filter) {
    toppingsFilter = $filter('pizzaToppings')
  }))

  it('should show toppings string', function () {
    let pizza = new Pizza(fixtures.pizzas[0])
    expect(toppingsFilter(pizza)).toEqual('un, deux, trois')
  })

  it('should show toppings x2 string', function () {
    let pizza = new Pizza({
      name: 'test',
      toppings: [
        'un',
        'un',
        'trois'
      ]
    })
    expect(toppingsFilter(pizza)).toEqual('un x2, trois')
  })

  it('should show \' \' string', function () {
    let pizza = new Pizza({
      name: 'test',
      toppings: []
    })
    expect(toppingsFilter(pizza)).toEqual('')
  })

  it('should show empty string', function () {
    let pizza = new Pizza(fixtures.nullToppingsPizza)
    expect(toppingsFilter(pizza)).toEqual('')
  })

  it('should show one string', function () {
    let pizza = new Pizza(fixtures.nullToppingPizza)
    expect(toppingsFilter(pizza)).toEqual('one')
  })
})
