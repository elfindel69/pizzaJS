import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .filter('bang', function () {
      return function (input, nb = 1) {
        let bang = ' '
        for (var i = 0; i < nb; i++) {
          bang = bang + '!'
        }
        return input + bang
      }
    })
    .name
