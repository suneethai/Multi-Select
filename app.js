var app = angular.module('plunker', ['ui.multiselect']);

app.controller('MainCtrl', function($scope) {
	$scope.name = 'World';
	$scope.cars = ['Audi','BMW','Honda','Apple','Orange','Banana','A','B','Ho','Ap','Or','Ba'];
	//$scope.selectedCar = [];
});