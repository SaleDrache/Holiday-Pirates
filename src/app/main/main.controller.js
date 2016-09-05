(function() {
  'use strict';

  angular
    .module('holidaypirates.main')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(HotelApi) {
    var vm = this;

    vm.hotels = '';
    vm.hotelsError = false;

    
    // METHODS
    vm.getStars = getStars;
    vm.loadHotels = loadHotels;


    activate();

    function activate() {

    }

    function getStars(starsNumber) {
      return new Array(starsNumber);
    }

    function loadHotels() {
      HotelApi
        .getHotels()
        .then(function(hotels){
          vm.hotelsError = false;
          vm.hotels = hotels;
        })
        .catch(function(){
          vm.hotelsError = true;
          vm.hotels = '';
        });
    }

  }
})();
