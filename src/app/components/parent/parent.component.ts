import { Component } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { carI } from '../../interfaces y clases/carI';

@Component({
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <h1>Catálogo de Autos</h1>
    <div class="grid-container">
      <app-child 
        *ngFor="let producto of productos" 
        [car]="producto"
        (carSelected)="showCarDetails($event)"
      ></app-child>
    </div>
    
    <div *ngIf="selectedCar" class="modal-overlay" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="closeModal()">×</button>
        <img [src]="selectedCar.carImage" alt="Imagen del coche" class="modal-image">
        <div class="modal-details">
          <h2>{{ selectedCar.name }}</h2>
          <div class="price-plate-container">
            <div class="price-box">
              <span class="label">Precio:</span>
              <span class="value">{{ selectedCar.precio | currency }}</span>
            </div>
            <div class="plate-box">
              <span class="label">Placa:</span>
              <span class="value plate-number">{{ selectedCar.placa }}</span>
            </div>
          </div>
          <button class="rent-btn" (click)="rentCar()">Rentar</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    h1 { text-align: center; }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 10px;
      padding: 10px;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      display: flex;
      max-width: 600px;
      position: relative;
    }
    .modal-image {
      width: 250px;
      height: auto;
      margin-right: 20px;
      border-radius: 4px;
    }
    .modal-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: #666;
    }
    .close-btn:hover {
      color: #000;
    }
    .price-plate-container {
      display: flex;
      gap: 15px;
      margin: 15px 0;
    }
    .price-box, .plate-box {
      padding: 10px;
      border-radius: 6px;
    }
    .price-box {
      background-color: #f5f5f5;
    }
    .plate-box {
      background-color: #e3f2fd;
      border: 1px solid #bbdefb;
    }
    .label {
      display: block;
      font-size: 12px;
      color: #666;
      margin-bottom: 4px;
    }
    .value {
      font-size: 16px;
      font-weight: bold;
    }
    .plate-number {
      font-size: 18px;
      color: #1976d2;
      letter-spacing: 1px;
    }
    .rent-btn {
      background-color: #4CAF50;
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
      align-self: flex-start;
    }
    .rent-btn:hover {
      background-color: #45a049;
    }
    `
  ]
})
export class ParentComponent {
  public productos: carI[] = [
    { "id": 1, "name": "Toyota Corolla", "precio": 21999.99, "carImage": "toyota-corolla.jpg", "placa": "ABC-1234" },
    { "id": 2, "name": "Honda Civic", "precio": 22999.99, "carImage": "honda-civic.jpg", "placa": "DEF-5678" },
    { "id": 3, "name": "Ford Mustang", "precio": 35999.99, "carImage": "ford-mustang.jpg", "placa": "GHI-9012" },
    { "id": 4, "name": "Chevrolet Camaro", "precio": 37999.99, "carImage": "chevrolet-camaro.jpg", "placa": "JKL-3456" },
    { "id": 5, "name": "BMW Serie 3", "precio": 41999.99, "carImage": "bmw-serie3.jpg", "placa": "MNO-7890" },
    { "id": 6, "name": "Audi A4", "precio": 42999.99, "carImage": "audi-a4.jpg", "placa": "PQR-1234" }
  ];

  selectedCar: carI | null = null;

  showCarDetails(car: carI) {
    this.selectedCar = car;
  }

  closeModal() {
    this.selectedCar = null;
  }

  rentCar() {
    if (this.selectedCar) {
      alert(`Has rentado el auto ${this.selectedCar.name} con placa ${this.selectedCar.placa}`);
      this.closeModal();
    }
  }
}