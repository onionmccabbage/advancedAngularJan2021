import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooLibService {

  constructor() { }
  proveCode(){
    console.log('the library service works')
  }
}
