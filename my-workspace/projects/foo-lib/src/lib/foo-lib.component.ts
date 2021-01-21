import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'foo-fooLib',
  template: `
    <p>
      foo-lib works!
    </p>
  `,
  styles: [
  ]
})
export class FooLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
