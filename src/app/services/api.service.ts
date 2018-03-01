import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import * as Env from '../environment';

@Injectable()

export class ApiService {

  constructor(private Http: Http) { }

  ApiConnect () {
  	let headers = new Headers({
  		'Access-Control-Allow-Origin': '*',
  		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    	'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    	'Access-Control-Allow-Credentials': true 
	});
	let options = new RequestOptions({
		headers: headers
	});

  	this.Http.get("http://localhost/nevada/api/?action=api_test", options).subscribe(x => {
  		alert(2);
  		console.log(x.json());
  	});
  }

}
