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

  function initNewUser () {
    ctrl.newUser = {
      name: 'John Doe',
      email: ''
    }
  }
  initNewUser()

  ctrl.users = [
    { name: 'Jean' },
    { name: 'Paul' },
    { name: 'John' }
  ]

  ctrl.addUser = function () {
    ctrl.users.push(angular.copy(ctrl.newUser))
    initNewUser()
  }

  ctrl.removeUser = function (pos) {
    ctrl.users.splice(pos, 1)
  }
}

