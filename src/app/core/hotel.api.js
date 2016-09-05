(function () {
  'use strict';

  angular
	.module('holidaypirates.core')
	.factory('HotelApi', HotelApi);

  /** @ngInject */
  function HotelApi($http) {

    return {
      getHotels:    getHotels,
      getReviews:   getReviews
    }

    function getHotels() {
      var url = 'http://fake-hotel-api.herokuapp.com/api/hotels';

      var params = {
        count: 5
      };

      return $http
        .get(url, {
            params: params
          })        
        .then(function(response){
          return response.data;
        });
    }

    function getReviews(id) {
      var url = 'http://fake-hotel-api.herokuapp.com/api/reviews';

      var params = {
        hotel_id: id
      };

      return $http
        .get(url, {
            params: params
          })        
        .then(function(response){
          return response.data;
        });
    }
  }
})();