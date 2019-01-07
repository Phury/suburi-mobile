import angular from 'angular';
import template from './template.html';

class FooterCtrl {
	constructor() {
	}
}

export default angular.module('ksFooter', [])
	.controller('FooterCtrl', FooterCtrl)
	.component('ksFooter', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'FooterCtrl'
	})
	.name;
