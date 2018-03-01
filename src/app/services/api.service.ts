import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import * as Env from '../env';

@Injectable()
export class ApiService {

  constructor(private Http: Http) {
    console.log(Env.RS);
  }

  ApiConnect () {
  	this.Http.post("http://localhost/nevada/api/", {action: "api_test"}).subscribe(x => {
  		console.log(x.json());

  	});
  }

}
