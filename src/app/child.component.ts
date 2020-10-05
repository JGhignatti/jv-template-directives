import { Component, Input, TemplateRef } from "@angular/core";

@Component({
  selector: 'jv-child',
  template: `
    <ng-container *ngFor="let item of list">
      <ng-container *ngTemplateOutlet="info; context: { $implicit: item, func: func }"></ng-container>
    </ng-container>
  `,
})
export class JvChildComponent {

  @Input() info: TemplateRef<any>;
  @Input() list: string[];

  func(item: string) {
    console.log(item);
  }
}
