import { Component } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 homeMessage = 'Hey, variable from Home';

 keyUpHandler(event: KeyboardEvent) {
  console.log(event.key);
 }
}
