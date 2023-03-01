import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // Define the animation trigger
    trigger('showHide', [
        state('in', style({ opacity: 1, visibility: 'visible' })),
        state('out', style({ opacity: 0, visibility: 'hidden' })),
        transition('in => out', animate('0.5s ease-in-out')),
        transition('out => in', animate('0.5s ease-in-out'))
    ])
]
})
export class HeaderComponent {
  @ViewChild('navbar') navbar!: ElementRef;

  public showNavbar:boolean = true;
  public showSidenav: boolean = false;
  public isScrolled: boolean = false;
  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
    if (window.innerWidth < 1025) {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
  }
  constructor() { }

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
  onResize() {
    if (window.innerWidth < 1025) {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
