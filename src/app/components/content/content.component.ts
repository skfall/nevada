import { Component, ViewChild, Output, Input } from '@angular/core';

import * as Env from '../../env';
import { ApiService } from './../../services/api.service';
import { RefService } from './../../services/ref.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
	constructor(private ApiService: ApiService, protected Ref: RefService){
		this.title = "CONTENT";
	}

	@ViewChild("mainForm") MainForm;

	HtmlRenderer (data) {
		console.log(data);
		let html = "";
		switch (data.name) {
			case "input":
				html = "<input type='"+ data.type +"' value='"+data.value+"'></br>";	
				break;
			default:
				break;
		}
		return html;
	}
	counter:number = 0;

	PrintData(){
		let response = this.ApiService.ApiConnect().subscribe(x => {
			let y = x.json();
			for(let i in y){
				let element = this.HtmlRenderer(y[i]);
				this.MainForm.nativeElement.innerHTML += element;				
			}
			this.counter++;
			this.Ref.changeMessage("Refreshed " + this.counter);

		});
	}

	title:string = "";
}
