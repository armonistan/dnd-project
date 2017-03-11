import {Component} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {StaticDataService} from '../services/static-data.service';

@Component({
	selector: 'home',
	styleUrls: ['./home.component.css', '../../style/app.css'],
	templateUrl: './home.component.html'
})

export class HomeComponent {

	stats: Array<Object> = [];
	skills: Array<Object> = [];
	
	constructor(private route: ActivatedRoute, private router: Router,) {
		let staticDataService = new StaticDataService();
		this.stats = staticDataService.getCharacterStats();
		this.skills = staticDataService.getCharacterSkills();
	}
}
