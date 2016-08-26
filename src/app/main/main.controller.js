(function() {
  'use strict';

  angular
    .module('holidaypirates.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(HotelApi) {
    var vm = this;

    vm.hotels = '';


    activate();

    function activate() {
      HotelApi
        .getHotels()
        .then(function(hotels){
          vm.hotels = hotels;
        });
    }

  }
})();
