import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'notes',
	styleUrls: ['./notes.component.css', '../../style/app.css'],
	templateUrl: './notes.component.html'
})

export class NotesComponent {
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
