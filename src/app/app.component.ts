import { Component, inject } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

import { CarService } from './car.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  display = ''
  title = 'angular-demo2'
  // carService = inject(CarService)

  constructor(private carService: CarService) {
    console.log(carService,'carService');
    
    this.display = this.carService.getCars().join(' ⭐️ ');
}
}
