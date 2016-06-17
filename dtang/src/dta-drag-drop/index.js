import angular from 'angular'
import { dtaDragDirective } from './dta-drag.directive'
import { dtaDropDirective } from './dta-drop.directive'

export const DTADragDropModule =

angular.module('dtang.dragNDrop', [])
    .directive('dtaDrag', dtaDragDirective)
    .directive('dtaDrop', dtaDropDirective)
    .name
