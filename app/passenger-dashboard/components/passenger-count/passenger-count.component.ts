import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';


@Component({
	selector: 'passenger-count',
	template:`
	<div>Passenger count: {{ items.length }}</div>
	<div>Checked in Passengr: {{ chkinPassenger() }} / {{ items.length }}</div>
	`
})


export class PassengerCountComponent {
	@Input()
	items:Passenger[];

	chkinPassenger() {
		if(!this.items) return;
		return this.items.filter((item:Passenger) => item.checkedIn ).length; 
	}
}