import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-app';
  getBackgroundImageUrl() {
    return `url(${this.myBackgroundImageUrl})`
  }
  myBackgroundImageUrl = 'https://www.fillmurray.com/200/300'
 

}
