import angular from 'angular';

class BootstrapService {
	constructor(eventService) {
		this.eventService = eventService;
	}
	
	bootstrap(user) {
		this.eventService.push({ user: user.name, name: 'Asa Geiko', date: '2019-01-07' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2019-01-07' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2019-01-07' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2019-01-06' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2019-01-06' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2019-01-06' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2019-01-06' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2019-01-06' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2019-01-05' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2019-01-05' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2019-01-02' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2019-01-02' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-30' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-30' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-28' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-28' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-27' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-26' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-26' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-26' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-26' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-26' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-25' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-25' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-25' });
		this.eventService.push({ user: user.name, name: 'Suburi (x100)', date: '2018-12-25' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-24' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-24' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-22' });
		this.eventService.push({ user: user.name, name: 'Club training', date: '2018-12-22' });
	}
}

export default angular.module('bootstrapService', [])
	.service('bootstrapService', ['eventService', BootstrapService])
	.name;
