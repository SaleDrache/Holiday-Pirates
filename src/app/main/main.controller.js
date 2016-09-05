(function() {
  'use strict';

  angular
    .module('holidaypirates.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(HotelApi) {
    var vm = this;

    vm.hotels = '';

    
    // METHODS
    vm.getStars = getStars;


    activate();

    function activate() {
      HotelApi
        .getHotels()
        .then(function(hotels){
          vm.hotels = hotels;
        });
    }

    function getStars(starsNumber) {
      return new Array(starsNumber);
    }

  }
})();
