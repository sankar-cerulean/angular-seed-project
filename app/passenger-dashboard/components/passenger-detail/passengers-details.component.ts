import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
	selector: 'passenger-details',
	template:`
	<div>
		<li>
		    <span class="status" [ngClass]= "{'checked-in':item.checkedIn}"></span>
      		{{ i }}: {{ item.fullname }}
      		<div class="date">
        		Check in date: {{ item.checkInDate ? (item.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      		</div>
      		<div class="children">
        		Children: {{ item.children?.length || 0 }}
      		</div>
    	</li>
	</div>
	`
})


export class PassengerDetailsComponent {
@Input()
item: Passenger;	
}