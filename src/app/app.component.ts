import { Component } from '@angular/core';

// SERVICES
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private ApiService: ApiService){
		var a = this.ApiService.ApiConnect();
		console.log(a);
	}
  	title = 'app';
  	
}
