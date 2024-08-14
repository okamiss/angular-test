import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// FormsModule  ngModel双向数据绑定
export class UserComponent {
  favoriteFramework = ''

  showFramework() {
    console.log(this.favoriteFramework)
  }
}
