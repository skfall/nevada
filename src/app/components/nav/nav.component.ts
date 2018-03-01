import { Component, Output, Input, Injectable, OnInit } from '@angular/core';
import * as Env from '../../env';
import { RefService } from './../../services/ref.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})


export class NavComponent implements OnInit {


	constructor(protected ref: RefService){

	}

	PrintNavPage(p: number){
		this.ref.loadPage(p);
	}

	ngOnInit() {
    	this.ref.currentMessage.subscribe(message => this.title = message)
    	this.title = "NAV";
  	}

	title:string = "";
}
