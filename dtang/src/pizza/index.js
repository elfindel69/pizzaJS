import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'

import { PizzaService } from './pizza.service'
export const PizzaModule =

angular.module('dtang.pizza', [])

    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)

    .filter('pizzaToppings', pizzaToppingsFilter)
    .service('PizzaService', PizzaService)
    .name
