import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  isOpen: boolean = false;
  @Input() currentUser = null;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
  @Output() logoutUser = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  logout(): void {
    this.logoutUser.emit();
  }
}
