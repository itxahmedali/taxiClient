import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.scss']
})
export class PointComponent {
  @Input() imageUrl!: string;
  @Input() className!: string;
  @Input() heading!: string;
  @Input() text!: string;
}
