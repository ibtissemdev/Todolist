import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCfLmi0L9f7y2OEBNzCXNWFzspbI-sK3vU",
  authDomain: "test-firebase-efed8.firebaseapp.com",
  projectId: "test-firebase-efed8",
  storageBucket: "test-firebase-efed8.appspot.com",
  messagingSenderId: "510078060782",
  appId: "1:510078060782:web:38b6662fce1eb978140bff"
};


// const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],


})

export class AppModule {

}

