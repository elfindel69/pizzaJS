import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaToppingsComponent } from './pizza-toppings.component'
import { PizzaService } from './pizza.service'
export const PizzaModule =

angular.module('dtang.pizza', [])

    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)
    .component('pizzaToppings', PizzaToppingsComponent)
    .filter('pizzaToppings', pizzaToppingsFilter)
    .service('PizzaService', PizzaService)
    .name
