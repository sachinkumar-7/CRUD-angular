import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { AlertComponent } from './_components/alert/alert.component';
import { HomeComponent } from './home/home.component';
import { fakeBackendProvider } from './_helpers/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }