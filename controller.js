angular.module('userProfiles').controller('MainController', function($scope,mainService){

    $scope.thisAppIsBroken = "This angular app is working";

  //  $scope.getData = mainService.getUsers();
   $scope.getData = mainService.getUsers();




   $scope.toggleFavorite = mainService.toggleFavorite;
})
