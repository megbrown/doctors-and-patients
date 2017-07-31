"use strict";

healthApp.controller("DoctorListCtrl", function($scope, DoctorListFactory) {

	DoctorListFactory.getDoctors()
	.then( (doctors) => {
		let doctorArr = [];
		let doctorData = doctors.data;
		Object.keys(doctorData).forEach( (key) => {
			doctorData[key].id = key;
			doctorArr.push(doctorData[key]);
		});
		$scope.doctors = doctorArr;
	})
	.catch( (err) => {
		console.log("error!!!", err);
	});

});