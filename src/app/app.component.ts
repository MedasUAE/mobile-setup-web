import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rootPage: any;
  constructor(private router: Router) {
    (localStorage.getItem('auth')) ? this.router.navigate(['/dashboard']) : this.router.navigate(['/login'])

  }
}
