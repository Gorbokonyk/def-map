import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavigation } from './top-navigation/top-navigation';
import { MainMap } from './main-map/main-map';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavigation, MainMap],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('newDotsMap');
}
