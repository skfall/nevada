import { Component } from '@angular/core';
import * as Env from '../../env';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html'
})
export class ToolsComponent {
	constructor(){
		this.title = "TOOLS";
	}

	title:string = "";
}
