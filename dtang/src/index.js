import angular from 'angular'
import ngRoute from 'angular-route'
import { PizzaModule } from './pizza'

class DtaUserDirectiveController {
  constructor ($timeout) {
    console.log('Instanciation du contrôleur')
    $timeout(() => {
      this.onAction({
        $event: {
          color: this.color
        }
      })
    }, 1000)
  }
}

angular.module('dtang', [
  PizzaModule, ngRoute
])
.config(function ($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'pizza-list.html',
    controller: 'PizzaListController',
    controllerAs: '$ctrl'
  })
  .when('/about', {
    template: '<h1>ABOUT</h1>',
    controller: function () {}
  }).otherwise('/')
.when('/pizza/:id', {
  templateUrl: 'pizza-form.html',
  controller: 'PizzaController',
  controllerAs: '$ctrl'
})
.otherwise('/')
})

.component('dtaUser', {
  bindings: {
    user: '=',
    color: '@userColor',
    onAction: '&'
  },
  transclude: true,
  template: `
    <h2>
      <strong ng-transclude></strong>
      {{ $ctrl.user }}
    </h2>
  `,
  controller: DtaUserDirectiveController
})


  .run(function ($rootScope) {
    $rootScope.user2 = { name: 'Thomas' }
    // $rootScope.$on('$routeChangeStart', (event, next, current) => {
    //   console.log('$routeChangeStart', event)
    // })
    $rootScope.test = function () {
      console.log('TEST')
    }
  })

angular.bootstrap(document, ['dtang'])
