import { Component } from '@angular/core'
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common'

// 自定义管道
import { ReversePipe } from './diyPain'

@Component({
  selector: 'app-guandao',
  standalone: true,
  imports: [DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
  templateUrl: './guandao.component.html',
  styleUrl: './guandao.component.css'
})

// 管道 类似vue里面的filter
export class GuandaoComponent {
  num = 103.1234
  birthday = new Date(2023, 3, 2, 10, 33, 59)
  cost = 4560.34

  word = 'abcde'
}
