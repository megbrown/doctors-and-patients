"use strict";

healthApp.controller("PatientDetailCtrl", function($scope, $routeParams, PatientDetailFactory) {

	PatientDetailFactory.getPatientDetail($routeParams.doctor)
		.then( (patients) => {
			let patientArr = [];
			angular.forEach(patients.data, function(obj) {
				patientArr.push(obj);
			});
			$scope.patients = patientArr;
		})
		.catch( (err) => {
			console.log("error!", err);
		});

});