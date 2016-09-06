(function () {
  'use strict';

  angular
    .module('holidaypirates.imageloaded')
    .directive('imageloaded', imageloaded);

  /** @ngInject */
  function imageloaded() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('load', function() {
            console.log('Image loaded', element);
            scope.$apply(attrs.imageloaded);
        });
      }
    };
  }
})();