import { RouterModule, Routes} from '@angular/router';

import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';


export const routes: Routes =[
  { path:'', redirectTo:'/', pathMatch: 'full' },
  { path:'list', component: ListComponent},
  { path:'about', component: AboutComponent },
  { path:'detail/:id', component: DetailComponent},
  { path:'**', component: AboutComponent }
]
