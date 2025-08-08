import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeadbarComponent} from './components/headbar/headbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop_ban_quan_ao';
}
