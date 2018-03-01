import { Injectable } from '@angular/core';
import * as Env from '../env';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RefService {
	private messageSource = new BehaviorSubject<string>("");
	currentMessage = this.messageSource.asObservable();

	constructor() { }

	changeMessage(message: string) {
		this.messageSource.next(message)
	}
}
