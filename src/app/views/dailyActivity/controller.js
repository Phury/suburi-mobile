import angular from "angular";
import template from './template.html';

import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.css';

let routing = ($stateProvider) => {
	$stateProvider
		.state('activities', {
			parent: 'base',
			url: '/activities/:date',
			controller: 'DailyActivityController',
			controllerAs: 'ctrl',
			template: template,
			params: { date: formatDate(new Date()) },
			data: { requireLogin: true }
		});
};

let formatDate = (date) => {
	let d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();
	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	return [year, month, day].join('-');
};

let parseDate = (str) => {
	let from = str.split("-");
	return new Date(from[0], from[1] - 1, from[2]);
};

let addDay = (date, days) => {
	return new Date(date).setDate(date.getDate()+days);
};

class DailyActivityController {
	constructor($stateParams, toastr, uiService, eventService, activityService) {
		this.toastr = toastr;
		this.uiService = uiService;
		this.eventService = eventService;
		this.activityService = activityService;


		this.currentDay = $stateParams.date;

		let date = parseDate(this.currentDay);
		this.nextDay = formatDate(addDay(date, 1));
		this.previousDay = formatDate(addDay(date, -1));
	}

	$onInit() {
		this.activityService.listActivities().then(activities => {
			this.activities = activities;
		});
	}

	perform(activity) {
		let event = {
			name: activity.label,
			date:this.currentDay
		};
		this.toastr.success(event.name);
		this.eventService.push(event);
	}
}

export default angular.module('ksDailies', ['toastr'])
	.config(routing)
	.controller('DailyActivityController', ['$stateParams', 'toastr', 'uiService', 'eventService', 'activityService', DailyActivityController])
	.name;