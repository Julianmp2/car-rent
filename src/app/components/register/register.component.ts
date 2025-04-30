import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
   <main>
  <img src="logo.png" alt="Logo" class="logo">
  <h2>Crear cuenta</h2>

  <div class="selector-pais">
    <span>México</span>
    <a href="#" class="Cambiar">Cambiar</a>
  </div>
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <input type="email" formControlName="email" placeholder="Correo electrónico*" required>
    <div *ngIf="form.controls.email.invalid && form.controls.email.touched" class="error">
      Ingresa un correo válido (gmail, hotmail o outlook)
    </div>

    <input type="text" formControlName="username" placeholder="Nombre de usuario*" required>
    <div *ngIf="form.controls.username.invalid && form.controls.username.touched" class="error">
      Nombre de usuario requerido (2 a 30 caracteres)
    </div>

    <input type="password" formControlName="password" placeholder="Contraseña*" required>
    <div *ngIf="form.controls.password.invalid && form.controls.password.touched" class="error">
      La contraseña debe tener al menos 6 caracteres
    </div>

    <button type="submit" [disabled]="form.invalid">Registrarse</button>
  </form>

  <h2>Valores</h2>
  <h3>Interpolación | JSON</h3>
  <pre>{{ form.value | json }}</pre>

  <a href="#">¿Ya tienes cuenta? Inicia sesión</a>
</main>
  `,
  styles: [`
    main {
      max-width: 400px;
      margin: auto;
      background: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    form {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
      transition: border 0.3s;
    }

    button {
      padding: 12px;
      background-color: black;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      margin-top: 10px;
      transition: background 0.3s, transform 0.2s ease-in-out;
    }

    button:hover {
      background-color: #333;
      transform: scale(1.05);
    }

    .logo {
  width: 80px;
  height: 80px;
}


    .error {
      color: red;
      font-size: 12px;
      margin-top: -5px;
      margin-bottom: 10px;
    }
  `]
})
export class RegisterComponent {
  private firestore: Firestore = inject(Firestore);

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/)
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  async onSubmit() {
    if (this.form.valid) {
      try {
        const usersCollection = collection(this.firestore, 'users'); 
        await addDoc(usersCollection, {
          email: this.form.value.email,
          username: this.form.value.username,
          password: this.form.value.password
        });
        alert('¡Registro exitoso!');
        this.form.reset();
      } catch (error) {
        console.error('Error al registrar:', error);
        alert('Error al registrar, intenta de nuevo.');
      }
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
