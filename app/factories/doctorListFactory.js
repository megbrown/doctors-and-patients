"use strict";

healthApp.factory("DoctorListFactory", function($q, $http, FirebaseUrl) {

	function getDoctors() {
		return $q( (resolve, reject) => {
			$http.get(`${FirebaseUrl}doctors.json`)
			.then( (doctors) => {
				resolve(doctors);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}

	return { getDoctors };

});