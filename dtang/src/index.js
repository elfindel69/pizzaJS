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
  console.log('Mon Controller')
  const monCtrl = this
  monCtrl.message = 'Hello '

  monCtrl.user = {
    name: 'Thomas'
  }
  monCtrl.getName = function () {
    return 'Thomas'
  }
}
