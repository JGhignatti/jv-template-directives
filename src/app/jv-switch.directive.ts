import { Directive, DoCheck,  Host,  Input, TemplateRef,  ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[jvSwitch]',
})
export class JvSwitchDirective {

  @Input('jvSwitch') switchState: any;
}

@Directive({
  selector: '[jvSwitchCase]',
})
export class JvSwitchCaseDirective implements DoCheck {

  @Input('jvSwitchCase') caseValue: any;

  constructor(@Host() private jvSwitch: JvSwitchDirective,
              private vcRef: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngDoCheck() {
    if (this.jvSwitch.switchState === this.caseValue) {
      this.vcRef.createEmbeddedView(this.template);
    } else {
      this.vcRef.clear();
    }
  }
}
