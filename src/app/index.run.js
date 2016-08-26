(function() {
  'use strict';

  angular
    .module('holidaypirates')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
