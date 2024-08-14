import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() {}

  cars = ['aaaaaaaa', 'bbbbbbbbbb', 'ccccccccc']

  getCars(): string[] {
    return this.cars
  }

  getCar(id: number) {
    return this.cars[id]
  }
}
