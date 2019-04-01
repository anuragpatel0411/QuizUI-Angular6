import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaperComponent } from './paper/paper.component';
import { HomeComponent } from './home/home.component';
import { OrgPageComponent } from './org-page/org-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'Quiz/:organisation', component: OrgPageComponent},
  {path: 'Quiz/:organisation/Paper/:organisation/:category', component: PaperComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactUsComponent },
  {path: 'about', component: AboutUsComponent },
  {path: 'feedback', component: FeedbackComponent },
  {path: '**', component: PageNotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
