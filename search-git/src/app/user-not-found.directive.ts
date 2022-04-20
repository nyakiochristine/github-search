import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUserNotFound]'
})
export class UserNotFoundDirective implements OnInit {
  public get elRef(): ElementRef {
    return this._elRef;
  }
  public set elRef(value: ElementRef) {
    this._elRef = value;
  }

  constructor(private _elRef: ElementRef,private renderer:Renderer2){ }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'none')
  }

}
