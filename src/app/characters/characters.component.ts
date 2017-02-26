import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'characters',
	styleUrls: ['./characters.component.css'],
	templateUrl: './characters.component.html'
})

export class CharactersComponent {
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
