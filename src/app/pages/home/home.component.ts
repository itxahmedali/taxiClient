import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  activeSlide: number = 0;
  public items = [
    { image: '../../../assets/1x/about.png', alt: 'hello', heading:'Pick 01', subHeading:'2-6 Persons', description:'lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum ' },
    { image: '../../../assets/1x/about.png', alt: 'hello', heading:'Pick 01', subHeading:'2-6 Persons', description:'lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum ' },
    { image: '../../../assets/1x/about.png', alt: 'hello', heading:'Pick 01', subHeading:'2-6 Persons', description:'lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum ' },
    { image: '../../../assets/1x/about.png', alt: 'hello', heading:'Pick 01', subHeading:'2-6 Persons', description:'lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum ' },
    { image: '../../../assets/1x/about.png', alt: 'hello', heading:'Pick 01', subHeading:'2-6 Persons', description:'lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum ' },
    { image: '../../../assets/1x/about.png', alt: 'hello', heading:'Pick 01', subHeading:'2-6 Persons', description:'lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum ' }
  ]
  customOptions: OwlOptions = {
    items: 3, loop: true, margin: 20, nav: true, navText: ['<', '>'], center: true, autoplayHoverPause: true, responsive: { 0: { items: 1 }, 414: { items: 2 }, 768: { items: 3 } }
  }
  onActiveSlideChange(event:any) {
    this.activeSlide = event.item.index;
}
}
