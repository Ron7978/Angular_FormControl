import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form_Control';

  email = new FormControl('');

  updateEmail(){
    this.email.setValue('ronbhattacharya92gmail.com');
  }
}
