import angular from "angular";
import template from './template.html';
import authService from "../../services/authService";

let routing = ($stateProvider) => {
	$stateProvider
		.state('login', {
			parent: 'base',
			url: '/login',
			controller: 'LoginController',
			controllerAs: 'ctrl',
			template: template,
			data: { requireLogin: false }
		});
};

class LoginController {
	constructor($state, authService, bootstrapService) {
		this.$state = $state;
		this.authService = authService;
		this.bootstrapService = bootstrapService;
	}

	$onInit() {
	}

	login() {
		console.log(this.user);
		// TODO: this.bootstrapService.bootstrap(this.user);
		this.authService.login(this.user);
		/*
		vm.project = {};
		vm.form.$setPristine();
		vm.form.$setUntouched();
		*/
	}
}


export default angular.module('ksLogin', [])
	.config(routing)
	.controller('LoginController', ['$state', 'authService', 'bootstrapService', LoginController])
	.name;