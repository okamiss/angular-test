import { NgClass } from '@angular/common'
import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
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

  profileForm = new FormGroup({
    firstName: new FormControl('a'),
    lastName: new FormControl('b')
  })

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);

    // this.profileForm.firstName.setValue('bbb')
  }
}
