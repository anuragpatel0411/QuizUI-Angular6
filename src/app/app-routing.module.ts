import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaperComponent } from './paper/paper.component';
import { HomeComponent } from './home/home.component';
import { OrgPageComponent } from './org-page/org-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {
    path: ':list.organisation', 
    component: OrgPageComponent, 
    children: [
      {path: ':cat', component: PaperComponent }
    ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
