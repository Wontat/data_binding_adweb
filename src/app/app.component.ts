import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appName = "It's Lit!";
  clientName: string = 'Andrei';
  appliedWDClass = 'gray';
  notappliedWDClass = 'false';
  myColor = 'violet';

  myName = '';
}
