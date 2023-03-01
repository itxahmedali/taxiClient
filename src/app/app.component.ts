import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { slider } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slider ]
})
export class AppComponent {
  title = 'taxi';
  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init(); // Initialize WOW.js
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
