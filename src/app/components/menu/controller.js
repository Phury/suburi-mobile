import angular from 'angular';
import template from './template.html';

class MenuCtrl {
	constructor() {
	}
}

export default angular.module('ksMenu', [])
	.controller('MenuCtrl', MenuCtrl)
	.component('ksMenu', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'MenuCtrl'
	})
	.name;
