import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
// import { CarService } from '../car.service'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// FormsModule  ngModel双向数据绑定
export class UserComponent {
  favoriteFramework = ''

  showFramework() {
    console.log(this.favoriteFramework)
  }

  // --------------表单------------------

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  handleSubmit() {
    console.log(this.profileForm.value)
  }

  // --------------inject注入------------------

  // carService = inject(CarService)
}
