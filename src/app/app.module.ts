import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// rutas
import { AppRoutingModule } from './app-routing.module';

// charts
import { ChartsModule } from 'ng2-charts';

// servicios
import { MessageService } from './services/message.service';

// componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WhatidoitComponent } from './shared/whatidoit/whatidoit.component';
import { EmailComponent } from './components/email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    KnowledgeComponent,
    NavbarComponent,
    FooterComponent,
    WhatidoitComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
