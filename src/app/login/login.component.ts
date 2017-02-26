import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'login',
	styleUrls: ['./login.component.css'],
	templateUrl: './login.component.html'
})

export class LoginComponent {
	message: string = "Hello World!";
	userLoginValue: string = "";
	//configMessage: string = Config.LLAMA;
	//config = Config;
	
	constructor(private route: ActivatedRoute, private router: Router) {
	}
	
	login(){
		console.log(this.userLoginValue);
		this.router.navigate(["/home"]);
	}
}
