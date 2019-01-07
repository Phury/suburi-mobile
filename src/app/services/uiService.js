import angular from 'angular';

import 'semantic-ui/dist/semantic.js';

class UIService {
	constructor($timeout) {
		this.$timeout = $timeout;
	}

	accordion() {
		this.$timeout(() => { $('.ui.accordion').accordion('refresh'); }, 500);
	}

	tabs() {
		this.$timeout(() => { $('.menu .item').tab(); }, 500);
	}

	dropdown() {
		this.$timeout(() => { $('.ui.dropdown').dropdown(); }, 500);
	}

}

export default angular.module('uiService', [])
	.service('uiService', ['$timeout', UIService])
	.name;
