import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Config} from './config.service';

@Component({
	selector: 'home',
	styleUrls: ['./home.component.css'],
	templateUrl: './home.component.html'
})

export class HomeComponent {
	message: string = "Hello World!";
	userLoginValue: string = "";
	//configMessage: string = Config.LLAMA;
	config = Config;
	
	constructor(private route: ActivatedRoute, private router: Router) {
	}
	
	login(){
		console.log(this.userLoginValue);
		this.router.navigate(["/about"]);
	}
}
