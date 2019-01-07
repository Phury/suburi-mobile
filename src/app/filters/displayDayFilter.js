import angular from "angular";


export default angular.module('displayDayFilter', [])
	.filter('displayDay', () => {
		return function(dateStr) {
			return dateStr
		};
	})
	.name