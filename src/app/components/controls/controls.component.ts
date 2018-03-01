import { Component } from '@angular/core';
import * as Env from '../../env';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent {
	constructor(){
		this.title = "CONTROLS";
	}

	title:string = "";
}
