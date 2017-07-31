"use strict";

healthApp.factory("PatientDetailFactory", function($q, $http, FirebaseUrl) {

	let getPatientDetail = (doctorId) => {
		return $q( (resolve, reject) => {
			console.log(doctorId);
			$http.get(`${FirebaseUrl}patients.json?orderBy="doctor_id"&equalTo="${doctorId}"`)
			.then( (patients) => {
				resolve(patients);
				console.log(patients.data);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	};

	return { getPatientDetail };

});