import angular from 'angular'

angular.module('dtang', [])

  .config(function () {
    console.log('DTANG CONFIG')
  })

  .value('AppName', 'DTANG')

  .run(function (AppName) {
    console.log(AppName + ' START')
  })

  .controller('MonController', MonController)

angular.bootstrap(document, ['dtang'])

function MonController () {
  const ctrl = this

  ctrl.addUser = function () {
    ctrl.friends.push({name: ctrl.newName})
    ctrl.newName = ''
  }

  ctrl.removeUser = function (index) {
    ctrl.friends.splice(index, 1)
    ctrl.newName = ''
  }

  ctrl.friends = [{name: 'Bruno'}, {name: 'Nicolas'}]
}

