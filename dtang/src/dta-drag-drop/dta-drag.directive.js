
export function dtaDragDirective () {
  return {
    scope: {
      dtaDrag: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
       // set draggable
      element.attr('draggable', true)
      // handle drag event
      element.on('dragstart', evt => {
        scope.dtaDrag()
      })
    }
  }
}
