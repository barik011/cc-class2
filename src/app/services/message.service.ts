import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() { }
  messages:string[] = ['Hello World 1','Hello World 2','Hello World 3','Hello World 4','Hello World 5'];
}
