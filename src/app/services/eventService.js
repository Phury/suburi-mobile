import angular from 'angular';

let groupBy = (xs, key) => {
	return xs.reduce((acc, x) => {
		(acc[x[key]] = acc[x[key]] || []).push(x);
		return acc;
	}, {});
};

let objectMap = (object, callback) => {
	return Object.keys(object).reduce(function(result, key) {
		result[key] = callback(object[key])
		return result
	}, {})
};

class EventService {
	constructor(authService) {
		this.authService = authService
		this.events = [];
	}
	
	push(e) {
		e.user = this.authService.getUser();
		console.log(e);
		this.events.push(e);
	}

	sortedByDay() {
		let user = this.authService.getUser();
		let groupedByDate = groupBy(this.events.filter(e => e.user === user), 'date');
		let groupedByActivity = objectMap(groupedByDate, events => events.reduce((acc, e) => {
			acc[e.name] === undefined ? e.totalTime = 1 : e.totalTime = acc[e.name].totalTime + 1;
			acc[e.name] = e;
			return acc;
		}, {}));
		console.log(groupedByActivity);
		return groupedByActivity;
	}


}

export default angular.module('eventService', [])
	.service('eventService', ['authService', EventService])
	.name;
