import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Josh';

  loadedLink = 'recipe';
  linkSelected(feature: string) {
  this.loadedLink = feature;
}
}

