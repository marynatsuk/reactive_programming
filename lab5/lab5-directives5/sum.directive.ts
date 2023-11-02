import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[sum]',
})
export class SumDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() sumFrom = 20;
  @Input() sumTo = 30;

  ngOnInit() {
    let result = 0;
    for (let i = this.sumFrom; i <= this.sumTo; i++) {
      result += i;
    }
    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: result,
    });
  }
}
