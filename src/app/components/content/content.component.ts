import { Component } from '@angular/core';
import * as Env from '../../env';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
	constructor(){
		this.title = "CONTENT";
	}

	title:string = "";
}
