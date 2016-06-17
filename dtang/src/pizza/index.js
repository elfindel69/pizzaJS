import angular from 'angular'
import { DTADragDropModule } from '../dta-drag-drop'
import { PizzaListController } from './pizza-list.controller'
import { PizzaController } from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { PizzaToppingsComponent } from './pizza-toppings.component'
import { EditPizzaComponent } from './edit-pizza.component'
import { PizzaService } from './pizza.service'
export const PizzaModule =

angular.module('dtang.pizza', [DTADragDropModule])

    .controller('PizzaListController', PizzaListController)
    .controller('PizzaController', PizzaController)
    .component('pizzaToppings', PizzaToppingsComponent)
    .component('editPizza', EditPizzaComponent)
    .filter('pizzaToppings', pizzaToppingsFilter)
    .service('PizzaService', PizzaService)
    .name
