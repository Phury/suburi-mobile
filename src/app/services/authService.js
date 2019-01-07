import angular from 'angular';

class AuthService {
	constructor($rootScope, $state) {
		this.$rootScope = $rootScope;
		this.$state = $state;
	}

	login(user) {
		console.log('login() : ' + JSON.stringify(user));
		this.$rootScope.currentUser = user;
		this.$state.go('activities');
	}

	logout() {
		console.log('logout() : ' + JSON.stringify(this.$rootScope.currentUser));
		this.$rootScope.currentUser = undefined;
		this.$state.go('login');
	}

	isAuthenticated() {
		return this.$rootScope.currentUser !== undefined;
	}

	getUser() {
		return this.isAuthenticated() ? this.$rootScope.currentUser.name : 'Guest';
	}
}

export default angular.module('authService', [])
	.service('authService', ['$rootScope', '$state', AuthService])
	.name;
