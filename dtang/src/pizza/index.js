import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'

export const PizzaModule =

angular.module('dtang.pizza', [])

    .controller('PizzaListController', PizzaListController)

    .filter('pizzaToppings', pizzaToppingsFilter)

    .name
