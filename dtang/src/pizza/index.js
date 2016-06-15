import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { Pizza } from './pizza'
export const PizzaModule =

angular.module('dtang.pizza', [])

    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)

    .filter('pizzaToppings', pizzaToppingsFilter)
    .factory('PizzaService', function ($timeout) {
      var pizzas = [
        new Pizza({ name: 'Pizza 1', status: 0, toppings: ['eggs', 'mushrooms'] }),
        new Pizza({ name: 'Pizza 2', status: 1, toppings: [] }),
        new Pizza({ name: 'Pizza 3', status: 0, toppings: ['eggs', 'eggs', 'mushrooms'] }),
        new Pizza({ name: 'Pizza 4', status: 1 }),
        new Pizza({ name: 'Pizza 5', status: 0 })
      ]

      return {
        name: 'PizzaService',
        getPizzas () {
          return $timeout(2000).then(() => pizzas)
        }
      }
    })
    .name
