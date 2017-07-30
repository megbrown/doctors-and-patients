"use strict";

healthApp.controller("DoctorListCtrl", function($scope, DoctorListFactory) {
	console.log("hey");

	DoctorListFactory.getDoctors()
	.then( (doctors) => {
		let doctorArr = [];
		angular.forEach(doctors.data, function(obj) {
			doctorArr.push(obj);
		});
		console.log(doctorArr);
		$scope.doctors = doctorArr;
	});

});