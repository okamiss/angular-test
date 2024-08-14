import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule, NgOptimizedImage, provideImgixLoader } from '@angular/common'
import { HousingLocation } from '../housinglocation'

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
  providers: [
    // 统一前缀路径 
    provideImgixLoader('https://intelligent-push-1.oss-cn-shanghai.aliyuncs.com/pk_vote/')
  ]
})
export class HousingLocationComponent {
  // 接受传值 props
  @Input() abcccccccccc!: HousingLocation

  // 发送传值 emit
  @Output() emitPar = new EventEmitter<number>()

  occclick() {
    this.emitPar.emit(123)
  }
}
