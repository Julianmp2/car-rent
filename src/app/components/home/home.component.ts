import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Lista de Usuarios</h2>
    <ul>
      <li *ngFor="let user of users$ | async">
        <strong>{{ user.username }}</strong> - {{ user.email }}
      </li>
    </ul>
  `,
  styles: [`
    h2 { color: blue; }
    ul { list-style: none; padding: 0; }
    li { background: #f4f4f4; margin: 5px 0; padding: 10px; border-radius: 5px; }
  `]
})
export class HomeComponent {
  private firestore: Firestore = inject(Firestore);
  users$: Observable<any[]>;

  constructor() {

    const usersCollection = collection(this.firestore, 'users');  
    this.users$ = collectionData(usersCollection, { idField: 'id' }); 
  }
}
