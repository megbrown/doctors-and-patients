"use strict";

let healthApp = angular.module("HealthApp", ["ngRoute"])
.constant("FirebaseUrl", "https://health-app-3e5f5.firebaseio.com/");

healthApp.config( ($routeProvider) => {
	$routeProvider
	.when("/", {
		templateUrl: "partials/doctors-list.html",
		controller: "DoctorListCtrl"
	})
	.when("/:doctor", {
		templateUrl: "partials/patient-detail.html",
		controller: "PatientDetailCtrl"
	})
	.otherwise("/");

});