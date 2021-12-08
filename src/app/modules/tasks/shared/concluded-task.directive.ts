import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[concludedTask]'
})
export class ConcludedTaskDirective implements OnInit{

  @Input() concludedTask: boolean;

  constructor(private el: ElementRef) {}


  ngOnInit() {
    if (this.concludedTask) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
