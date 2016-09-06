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
    vm.hotelsLoading = false;

    
    // METHODS
    vm.getStars = getStars;
    vm.loadHotels = loadHotels;
    vm.getReviews = getReviews;


    activate();

    function activate() {

    }

    function getStars(starsNumber) {
      return new Array(starsNumber);
    }

    function loadHotels() {
      vm.hotelsLoading = true;

      HotelApi
        .getHotels()
        .then(function(hotels){
          vm.hotelsError = false;
          vm.hotels = hotels;
        })
        .catch(function(){
          vm.hotelsError = true;
          vm.hotels = '';
        })
        .finally(function(){
          vm.hotelsLoading = false;
        });
    }

    function getReviews(hotelId, index) {
      if (!vm.hotels[index].reviews) {
        vm.hotels[index].reviewsLoading = true;

        HotelApi
          .getReviews(hotelId)
          .then(function(reviews){
            vm.hotels[index].reviews = reviews;
          })
          .finally(function(){
            vm.hotels[index].reviewsLoading = false;
          });

      }
    }

  }
})();
