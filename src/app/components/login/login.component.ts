import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <main>
      <h2>Iniciar Sesión</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <input type="email" formControlName="email" placeholder="Correo electrónico" required>
        <div *ngIf="form.controls['email'].invalid && form.controls['email'].touched" class="error">
          Correo inválido.
        </div>

        <input type="password" formControlName="password" placeholder="Contraseña" required>
        <div *ngIf="form.controls['password'].invalid && form.controls['password'].touched" class="error">
          Contraseña requerida.
        </div>

        <button type="submit" [disabled]="form.invalid">Ingresar</button>
      </form>

      <div *ngIf="mensaje" [ngStyle]="{ color: esError ? 'red' : 'green' }">
        {{ mensaje }}
      </div>
    </main>
  `,
  styles: [`
    main {
      max-width: 300px;
      margin: auto;
      padding: 20px;
    }
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    .error {
      color: red;
      font-size: 12px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `]
})
export class LoginComponent {
  fb = inject(FormBuilder);
  auth = inject(Auth);

  mensaje = '';
  esError = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.form.invalid) return;

    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    if (!email || !password) {
      this.mensaje = 'Debes ingresar correo y contraseña.';
      this.esError = true;
      return;
    }

    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.mensaje = 'Inicio de sesión exitoso';
        this.esError = false;
        this.form.reset();
      })
      .catch((err) => {
        this.mensaje = 'Error al iniciar sesión: ' + err.message;
        this.esError = true;
      });
  }
}
