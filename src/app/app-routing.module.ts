import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:`main`,component:MainComponent
  },
  {
    path:`portfolio`,component:PortfolioComponent
  },
  {
    path:`resume`,component:ResumeComponent
  },
  {
    path:`contact`,component:ContactComponent
  },
  {
    path:`**`,component:MainComponent,pathMatch:`full`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
