(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.msgColor = 'black';
    $scope.items = "";

    function removeEmptyItems (array) {
      var cleanArray = [];
      for(var i=0; i< array.length; i++)
      {
        if(array[i]!="")
        {
          cleanArray.push(array[i]);
        }
      }
      return cleanArray;
    }

    function trimSpaces(array) {
      return array.map(function(el) {
        return el.trim();
      });
    }

    $scope.CheckIfTooMuch = function()
    {

      var array = $scope.items.split(',');
      array = trimSpaces(array);
      array = removeEmptyItems(array);
      if(array.length == 0)
      {
        $scope.msgColor = 'red';
        $scope.message = "Please enter data first";
      }
      else
      {
        $scope.msgColor = 'green';
        $scope.message = 'Too much!';
        if(array.length <= 3) {
          $scope.message = 'Enjoy!';
        }
      }
    }
  }

})();
