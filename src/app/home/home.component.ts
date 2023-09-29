import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p class='text-5xl text-red-600'>
      home works!
    </p>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
