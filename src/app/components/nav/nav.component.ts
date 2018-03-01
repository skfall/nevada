import { Component } from '@angular/core';
import * as Env from '../../env';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
	constructor(){
		this.title = "NAV";
	}

	title:string = "";
}
