import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <p *appOtherIf="condition" class="otherif a">
 (A) Condition is false.
</p>
<p *appOtherIf="!condition" class=" otherif b">
 (B) Although the condition is true, this paragraph is displayed.
</p>
<button (click)="condition = !condition">Toggle Condition</button>
    `
})
export class AppComponent {
    condition = false;
}
