import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
	$stateProvider
		.state('settings', {
			parent: 'base',
			url: '/settings',
			controller: 'SettingsController',
			controllerAs: 'ctrl',
			template: template,
			data: { requireSettings: true }
		});
};

class SettingsController {
	constructor(authService) {
		this.authService = authService;
	}

	$onInit() {
		this.isShowLogin = !this.authService.isAuthenticated();
		this.isShowLogout = this.authService.isAuthenticated();
	}

	logout() {
		this.authService.logout();
	}
}


export default angular.module('ksSettings', [])
	.config(routing)
	.controller('SettingsController', ['authService', SettingsController])
	.name;