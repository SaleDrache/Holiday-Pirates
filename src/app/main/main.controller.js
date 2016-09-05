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
    vm.reviewsError = [];

    
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

    function getReviews(hotelId, index) {
      if (!vm.hotels[index].reviews) {
        HotelApi
          .getReviews(hotelId)
          .then(function(reviews){
            vm.reviewsError[index] = false;
            vm.hotels[index].reviews = reviews;
          })
          .catch(function(){
            vm.reviewsError[index] = true;
          });

      }
    }

  }
})();
