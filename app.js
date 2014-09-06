var app = angular.module('multiSelectApp', ['ui.multiselect']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.cars = ['Audi', 'BMW', 'Honda', 'Toyota', 'Swift', 'Tata', 'Suzuki', 'Maruti', 'Waganore'];
});