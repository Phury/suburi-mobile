import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
	$stateProvider
		.state('activityLog', {
			parent: 'base',
			url: '/activityLog',
			controller: 'ActivityLogController',
			controllerAs: 'ctrl',
			template: template,
			data: { requireLogin: true }
		});
};

class ActivityLogController {
	constructor($scope, uiService, eventService) {
		this.$scope = $scope;
		this.uiService = uiService;
		this.eventService = eventService;
	}

	$onInit() {
		this.activities = this.eventService.sortedByDay();
		this.totalActivities = Object.keys(this.activities).length;
	}
}


export default angular.module('ksActivityLog', [])
	.config(routing)
	.controller('ActivityLogController', ['$scope', 'uiService', 'eventService', ActivityLogController])
	.name;