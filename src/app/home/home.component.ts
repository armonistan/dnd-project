import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import {Config} from './config.service';

@Component({
	selector: 'home',
	styleUrls: ['./home.component.css', '../../style/app.css'],
	templateUrl: './home.component.html'
})

export class HomeComponent {
	skills: Array<Object> = [
		{
			description: "Athletics",
			attribute: "Strength",
			isProficent: false
		},{
			description: "Acrobatics",
			attribute: "Dexterity",
			isProficent: false
		},{
			description: "Sleight of Hand",
			attribute: "Dexterity",
			isProficent: false
		},{
			description: "Stealth",
			attribute: "Dexterity",
			isProficent: false
		},{
			description: "Arcana",
			attribute: "Intelligence",
			isProficent: false
		},{
			description: "History",
			attribute: "Intelligence",
			isProficent: false
		},{
			description: "Investigation",
			attribute: "Intelligence",
			isProficent: false
		},{
			description: "Nature",
			attribute: "Intelligence",
			isProficent: false
		},{
			description: "Religion",
			attribute: "Intelligence",
			isProficent: false
		},{
			description: "Animal Handling",
			attribute: "Wisdom",
			isProficent: false
		},{
			description: "Insight",
			attribute: "Wisdom",
			isProficent: false
		},{
			description: "Medicine",
			attribute: "Wisdom",
			isProficent: false
		},{
			description: "Perception",
			attribute: "Wisdom",
			isProficent: false
		},{
			description: "Survival",
			attribute: "Wisdom",
			isProficent: false
		},{
			description: "Deception",
			attribute: "Charisma",
			isProficent: false
		},{
			description: "Intimidation",
			attribute: "Charisma",
			isProficent: false
		},{
			description: "Performance",
			attribute: "Charisma",
			isProficent: false
		},{
			description: "Persuasion",
			attribute: "Charisma",
			isProficent: false
		}
	];
	userLoginValue: string = "";
	
	constructor(private route: ActivatedRoute, private router: Router) {
	}
	
	llama(){
		console.log(this.userLoginValue);
		//this.router.navigate(["/about"]);
	}
}
