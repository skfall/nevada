import { Component, ViewChild, Output, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import * as Env from '../../env';
import { ApiService } from './../../services/api.service';
import { RefService } from './../../services/ref.service';
import { Renderer } from './../../renderer';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  providers: [Renderer]
})

export class ContentComponent {
	constructor(private ApiService: ApiService, protected Ref: RefService, public R : Renderer){
		this.title = "CONTENT";
	}

	@ViewChild("content_target") content_target;


	counter:number = 0;

	ngOnInit() {
    	this.Ref.loaded_content.subscribe(x => {
	    	if (x == 1) {
	    		this.PrintData();
	    	}
    	})
    	this.title = "NAV";
  	}

	PrintData(){
		let response = this.ApiService.ApiConnect().subscribe(x => {
			let y = x.json();
			this.content_target.nativeElement.innerHTML = "";
			for(let i in y){
				let element = this.R.Render(y[i]);
				this.content_target.nativeElement.innerHTML += element;				
			}
			this.counter++;
			this.Ref.changeMessage("Refreshed " + this.counter);

		});
	}

	title:string = "";
}
