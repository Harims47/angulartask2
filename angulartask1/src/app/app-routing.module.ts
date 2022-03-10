import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

const routes: Routes = [
  {
    path: '',
    component: PagetwoComponent

  },
  {
    path: 'page',
    component: PageComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
