import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import * as Env from '../env';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
  
  constructor(private Http: Http) {

  }

  ApiConnect () {
  	return this.Http.post("http://localhost/nevada/api/", {action: "api_test"});
  }

}
