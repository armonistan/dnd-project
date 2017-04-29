import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {StaticDataService} from '../services/static-data.service';

@Component({
	selector: 'inventory',
	styleUrls: ['./inventory.component.css', '../../style/app.css'],
	templateUrl: './inventory.component.html'
})

export class InventoryComponent {
	inventory: Array<Object> = [];
	spells: Array<Object> = [];
	
	constructor(private route: ActivatedRoute, private router: Router) {
		let staticDataService = new StaticDataService();
		this.inventory = staticDataService.getInventory();
		this.spells = staticDataService.getSpells();
	}
	
	goToState(state){
		this.router.navigate([state]);
	}
}
