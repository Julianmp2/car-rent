import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rentas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Número de rentas: {{ numberTask }}</h1>
    
    <div class="form-container">
      <select [(ngModel)]="placa" (change)="validateForm()">
        <option value="" disabled selected>Selecciona una placa</option>
        <option *ngFor="let p of availablePlacas" [value]="p">{{ p }}</option>
      </select>
      
      <input type="text" placeholder="Ingresa el nombre del rentador" [(ngModel)]="nombre" (input)="validateForm()">
      
      <select [(ngModel)]="modelo" (change)="validateForm()">
        <option value="" disabled selected>Selecciona un modelo</option>
        <option *ngFor="let car of carModels" [value]="car.name">{{ car.name }}</option>
      </select> 
      
      <img *ngIf="modelo" [src]="getCarImage(modelo)" alt="Modelo seleccionado" class="car-image">
      
      <button [disabled]="!activeButton" (click)="addRenta()" class="rent-button">Ingresar Renta</button>
    </div>
    
    <h2>Rentas Registradas</h2>
    <select (change)="selectRenta($event)">
      <option value="" disabled selected>Selecciona una renta</option>
      <option *ngFor="let renta of rentas" [value]="renta.placa">{{ renta.modelo }} - {{ renta.nombre }}</option>
    </select>
    
    
    <h2>Valores</h2>
    <h3>Interpolación | JSON</h3>
    <pre>{{ selectedRenta | json }}</pre>
  `,
  styles: [
    `
      .form-container {
        display: flex;
        flex-direction: column;
        width: 200px;
        gap: 10px;
      }
      select {
        margin-top: 10px;
        padding: 5px;
      }
      .rent-button {
        background-color: darkred;
        color: white;
        padding: 12px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
      .rent-button:disabled {
        background-color: gray;
        cursor: not-allowed;
      }
      .car-image {
        margin-top: 10px;
        width: 200px;
        height: auto;
        border-radius: 8px;
      }
    `
  ]
})
export class RentasComponent {
  numberTask: number = 0;
  placa: string = "";
  nombre: string = "";
  modelo: string = "";
  activeButton: boolean = false;
  rentas: { placa: string, nombre: string, modelo: string }[] = [];
  selectedRenta: any = null;

  placasDisponibles = ["ABC123", "XYZ789", "LMN456", "DEF987", "GHI654"];

  get availablePlacas() {
    return this.placasDisponibles.filter(p => !this.rentas.some(r => r.placa === p));
  }

  carModels = [
    { name: "Toyota Corolla", image: "toyota-corolla.jpg" },
    { name: "Honda Civic", image: "honda-civic.jpg" },
    { name: "Ford Mustang", image: "ford-mustang.jpg" },
    { name: "Chevrolet Camaro", image: "chevrolet-camaro.jpg" },
    { name: "BMW Serie 3", image: "bmw-serie3.jpg" },
    { name: "Audi A4", image: "audi-a4.jpg" }
  ];

  validateForm() {
    this.activeButton = this.placa.trim() !== '' && this.nombre.trim() !== '' && this.modelo.trim() !== '';
  }

  addRenta() {
    this.rentas.push({ placa: this.placa, nombre: this.nombre, modelo: this.modelo });
    this.numberTask++;
    this.placa = '';
    this.nombre = '';
    this.modelo = '';
    this.activeButton = false;
  }

  selectRenta(event: any) {
    const placaSeleccionada = event.target.value;
    this.selectedRenta = this.rentas.find(renta => renta.placa === placaSeleccionada);
  }

  getCarImage(model: string): string {
    const car = this.carModels.find(car => car.name === model);
    return car ? car.image : '';
  }
}

