import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {StaticDataService} from '../services/static-data.service';

@Component({
	selector: 'characters',
	styleUrls: ['./characters.component.css', '../../style/app.css'],
	templateUrl: './characters.component.html'
})

export class CharactersComponent {
	
	characters: Array<Object> = [];
	notes: string = "";
	whispers: string="";
	
	constructor(private route: ActivatedRoute, private router: Router) {
		let staticDataService = new StaticDataService();
		this.characters = staticDataService.getCharacters();
		this.notes = "Hello World";
		this.whispers = "Llama Prime greets you";
	}
	
	goToState(state){
		this.router.navigate([state]);
	}
}
