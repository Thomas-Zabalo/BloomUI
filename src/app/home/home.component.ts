import {Component, signal} from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  HomeMessage = signal("Hello World!");

  KeyUpHandler(event: KeyboardEvent) {
    console.log(`Key pressed: ${event.key}`)
  }
}
