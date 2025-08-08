import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from "@angular/material/icon";
import {Router} from '@angular/router';

@Component({
  selector: 'app-headbar',
    imports: [
        MatToolbar,
        MatIcon,
        MatIconButton,
        MatIcon,
        MatIcon,
        MatIcon
    ],
  templateUrl: './headbar.component.html',
  styleUrl: './headbar.component.scss'
})
export class HeadbarComponent {

  constructor(private router:Router) {

  }
  navigateToCart() {
    this.router.navigate(['/cart']).then();
  }
  navigateToHome() {
    this.router.navigate(['/']).then();
  }
}
