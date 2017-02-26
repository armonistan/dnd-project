import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'inventory',
	styleUrls: ['./inventory.component.css'],
	templateUrl: './inventory.component.html'
})

export class InventoryComponent {
	message: string = "Hello World!";
	userLoginValue: string = "";
	//configMessage: string = Config.LLAMA;
	
	constructor(private route: ActivatedRoute, private router: Router) {
	}
	
	login(){
		console.log(this.userLoginValue);
		this.router.navigate(["/about"]);
	}
}
