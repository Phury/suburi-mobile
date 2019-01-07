import angular from 'angular';
import template from './template.html';

class HeaderCtrl {
	constructor() {
	}
}

export default angular.module('ksHeader', [])
	.controller('HeaderCtrl', HeaderCtrl)
	.component('ksHeader', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'HeaderCtrl'
	})
	.name;
