var app = angular.module('plunker', ['ui.multiselect']);

app.controller('MainCtrl', function($scope) {
	$scope.name = 'World';
	$scope.cars = ['Audi','BMW','Honda','Toyota','Swift','Tata','Suzuki','Maruti','Waganore'];
	//$scope.selectedCar = [];
});