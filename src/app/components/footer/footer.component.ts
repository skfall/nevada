import { Component } from '@angular/core';
import * as Env from '../../env';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
	constructor(){
		this.title = "FOOTER";
	}

	title:string = "";
}
