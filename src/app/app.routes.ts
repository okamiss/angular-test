import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { UserComponent } from './user/user.component'
import { GuandaoComponent } from './guandao/guandao.component'

export const routes: Routes = [
  // { path: '', title: 'home----------', component: HomeComponent },
  { path: 'home', title: 'home----------', component: HomeComponent },
  { path: 'about', title: 'about------', component: AboutComponent },
  { path: 'user', title: 'user------', component: UserComponent },
  { path: 'guandao', title: 'guandao------', component: GuandaoComponent },
]
