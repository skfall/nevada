import { Injectable } from '@angular/core';
import * as Env from '../env';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RefService {
	private messageSource = new BehaviorSubject<string>("");
	private page = new BehaviorSubject<number>(0);
	currentMessage = this.messageSource.asObservable();
	loaded_content = this.page.asObservable();

	constructor() { }

	changeMessage(message: string) {
		this.messageSource.next(message)
	}

	loadPage(page_id: number){
		this.page.next(page_id)
	}

}
