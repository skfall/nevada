import { Component } from '@angular/core';
import * as Env from '../../env';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(){
		this.title = "HEADER";
	}

	title:string = "";
}
