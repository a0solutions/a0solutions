import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './Share/components/nav/nav.component';
import { TemplateComponent } from './template/template.component';
import { MissionComponent } from './mission/mission.component';
import { ServicesComponent } from './services/services.component';
import { ExtrasComponent } from './Share/components/extras/extras.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService } from './contact/services/contactService.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from './Share/services/alerts.service';
import { AlertComponent } from './Share/components/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectsComponent,
    ContactComponent,
    NavComponent,
    TemplateComponent,
    MissionComponent,
    ServicesComponent,
    ExtrasComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [ContactService, AlertsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
