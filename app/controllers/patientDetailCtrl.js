"use strict";

healthApp.controller("PatientDetailCtrl", function($scope, $routeParams, PatientDetailFactory) {

	PatientDetailFactory.getPatientDetail($routeParams.doctor)
		.then( (patients) => {
			let patientArr = [];
			console.log("this", patients.data);
			angular.forEach(patients.data, function(obj) {
				patientArr.push(obj);
			});
			console.log("patientArr", patientArr);
			$scope.patients = patientArr;
		})
		.catch( (err) => {
			console.log("error!", err);
		});

});