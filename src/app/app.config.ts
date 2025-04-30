import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyDtwRCLWoJFYHiGwq3j5Jmm0XCk3T7-ArM",
  authDomain: "rentatec-b0ff5.firebaseapp.com",
  projectId: "rentatec-b0ff5",
  storageBucket: "rentatec-b0ff5.appspot.com",
  messagingSenderId: "1020470564361",
  appId: "1:1020470564361:web:3f3ccf529b363805f48ad8"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};

