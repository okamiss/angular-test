import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  currentItem: any
  title = 'click me'
  imgurl = 'http://'
  arr = [1, 3, 4]

  a = 5
  b = 2

  sw = 'b'

  titClick = () => {
    console.log(666)
    this.title = 'hhhha'
  }

  name = new FormControl('')
}
