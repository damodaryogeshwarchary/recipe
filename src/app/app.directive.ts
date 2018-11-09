import { Directive,TemplateRef,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appApp]'
})
export class AppDirective {

  constructor(private template: TemplateRef<any>,private view: ViewContainerRef) { }
  // @Input() set appApp(count: boolean) {
  //   for (var i = 0; i < count; i++) {
  //     this.view.createEmbeddedView(this.template);
  //   }
  // }
}
