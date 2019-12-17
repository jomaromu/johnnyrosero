import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { EmailComponent } from './components/email/email.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'sendEmail', component: EmailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
