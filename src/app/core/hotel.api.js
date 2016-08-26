(function () {
  'use strict';

  angular
	.module('holidaypirates.core')
	.factory('HotelApi', HotelApi);

  /** @ngInject */
  function HotelApi($http) {

    return {
      getHotels: getHotels
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
  }
})();