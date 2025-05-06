import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  HomeMessage = signal("Hello World!");

  KeyUpHandler(event: KeyboardEvent) {
    console.log(`Key pressed: ${event.key}`)
  }
}
