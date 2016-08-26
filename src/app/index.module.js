(function() {
  'use strict';

  angular
    .module('holidaypirates', [
    	//////////
      // Libs //
      //////////
    	'ngAnimate', 
    	'ngCookies', 
    	'ngTouch', 
    	'ngSanitize', 
    	'ngMessages', 
    	'ngAria', 
    	'ui.router', 
    	'ui.bootstrap',
    	'toastr',

      //////////
      // Core //
      //////////

      'holidaypirates.core',

      //////////////
      // Features //
      //////////////

      'holidaypirates.main'

     ]);

})();
