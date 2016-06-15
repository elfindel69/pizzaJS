import angular from 'angular'
import ngRoute from 'angular-route'
import { PizzaModule } from './pizza'

angular.module('dtang', [
  PizzaModule, ngRoute
])
.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    template: '<h1>HOME</h1>',
    controller: function () {}
  })
})

angular.bootstrap(document, ['dtang'])
