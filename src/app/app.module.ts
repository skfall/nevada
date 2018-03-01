import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


// COMPONENTS
import { AppComponent } from './components/app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ContentComponent } from './components/content/content.component';


// SERVICES
import { ApiService } from './services/api.service';
import { RefService } from './services/ref.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ControlsComponent,
    ToolsComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ApiService, RefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
