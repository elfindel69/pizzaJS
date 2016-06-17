
export function dtaDragDirective () {
  return {
    scope: {
      dtaDrag: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].addEventListener('dragstart', evt => {
        scope.$apply(function () {
          scope.dtaDrag()
        })
      }, false)
    }
  }
}
