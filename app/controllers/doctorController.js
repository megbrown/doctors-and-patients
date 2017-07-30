"use strict";

healthApp.controller("DoctorListCtrl", function($scope, DoctorListFactory) {

	let doctorArr = [];
	DoctorListFactory.getDoctors()
	.then( (doctors) => {
		let doctorData = doctors.data;
		Object.keys(doctorData).forEach( (key) => {
			doctorData[key].id = key;
			doctorArr.push(doctorData[key]);
		});
		console.log(doctorArr);
		$scope.doctors = doctorArr;
	})
	.catch( (err) => {
		console.log("error!!!", err);
	});

});