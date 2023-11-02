import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div *sum="let result from 20 and 30">Сума = {{ result }}</div>`
})
export class AppComponent {}
