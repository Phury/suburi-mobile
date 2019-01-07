import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
	$stateProvider
		.state('goals', {
			parent: 'base',
			url: '/goals',
			controller: 'GoalsController',
			controllerAs: 'ctrl',
			template: template,
			data: { requireLogin: true }
		});
};

class GoalsController {
	constructor($scope, uiService, eventService) {
		this.$scope = $scope;
		this.uiService = uiService;
		this.eventService = eventService;
	}

	$onInit() {
		this.activities = this.eventService.sortedByDay();
		$('#goal1').progress({
			percent: 22
		});
		$('#goal2').progress({
			percent: 66
		});
	}
}


export default angular.module('ksGoals', [])
	.config(routing)
	.controller('GoalsController', ['$scope', 'uiService', 'eventService', GoalsController])
	.name;