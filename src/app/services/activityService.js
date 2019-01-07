import angular from 'angular';

class ActivityService {
	constructor($q) {
		this.$q = $q;
	}
	
	listActivities() {
		return this.$q.when([
			{
				label: "Asa Geiko"
			},
			{
				label: "Club training"
			},
			{
				label: "NTT"
			},
			{
				label: "Seminar"
			},
			{
				label: "Cardio"
			},
			{
				label: "Gym"
			},
			{
				label: "Suburi (x100)"
			}
		]);
	}


}

export default angular.module('activityService', [])
	.service('activityService', ['$q', ActivityService])
	.name;
