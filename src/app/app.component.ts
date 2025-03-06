import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-intro';
  imgUrl = '../assets/BL-logo.png';
  url = 'https://www.bridgelabz.com';

  ngOnInit() {
    this.title = 'Hello from BridgeLabz';
  }
  onClick($event: any) {
    console.log('Save button is clicked!', $event);
    window.open(this.url, '_blank');
  }
}
