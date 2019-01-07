import 'semantic-ui/dist/semantic.css';
import 'semantic-ui/dist/semantic.js';

import '../style/app.css';
import 'mana-font/css/mana.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import restangular from 'restangular';

import { routing } from './app.config';

import authService from './services/authService';
import bootstrapService from './services/bootstrapService';
import uiService from './services/uiService';
import eventService from './services/eventService';
import activityService from './services/activityService';

import header from './components/header/controller';
import menu from './components/menu/controller';
import footer from './components/footer/controller';

import login from './views/login/controller';
import settings from './views/settings/controller';
import activityLog from './views/activityLog/controller';
import dailyActivity from './views/dailyActivity/controller';
import goals from './views/goals/controller';

angular.module('kickstartNg', [
		uiRouter, restangular, // third parties
		authService, bootstrapService, uiService, eventService, activityService, // services
		header, menu, footer, // components
		login, settings, dailyActivity, goals, activityLog// views
	])
	.constant('API_URL', 'https://api.magicthegathering.io/v1/')
	.config(routing)
	.config(toastrConfig => {
		/*
		see:
			- https://www.npmjs.com/package/angular-toastr,
			- http://foxandxss.github.io/angular-toastr/
		 */
		angular.extend(toastrConfig, {
			autoDismiss: false,
			timeOut: 1500,
			positionClass: 'toast-bottom-center'
		});
	})
	.config(['RestangularProvider', 'API_URL', (RestangularProvider, API_URL) => {
		RestangularProvider.setBaseUrl(API_URL);
	}])
	// .run(['bootstrapService', (bootstrapService) => {
	// 	bootstrapService.bootstrap();
	// }])
	.run(['$transitions', 'authService', ($transitions, authService) => {
		$transitions.onStart({}, (trans) => {
			//console.log(trans);
			//console.log(trans.$from());
			//console.log(trans.$to());
			let requireLogin = trans.$to().data.requireLogin;
			if (!authService.isAuthenticated() && requireLogin) {
				console.warn('this page requires login but you are not!');
				return trans.router.stateService.target('login');
			}
		});
	}]);