import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carI } from '../../interfaces y clases/carI';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="car-card" (click)="selectCar()">
      <img [src]="car.carImage" alt="Imagen del coche" class="car-image">
      <div class="car-details">
        <h2>{{ car.name }}</h2>
        <div class="info-container">
          <span class="price">{{ car.precio | currency }}</span>
          <span class="plate">{{ car.placa }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .car-card {
      display: flex;
      flex-direction: row; 
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      padding: 10px;
      margin: 5px;
      height: 175px; 
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      border-radius: 6px;
      background-color: white;
    }
    .car-card:hover {
      transform: scale(1.02);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .car-image {
      width: 150px;
      height: auto;
      margin-right: 10px; 
      border-radius: 4px;
    }
    .car-details {
      text-align: left;
      font-size: 14px;
      width: 100%;
    }
    .info-container {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #eee;
    }
    .price {
      font-weight: bold;
      color: #2e7d32;
    }
    .plate {
      font-weight: bold;
      color: #1976d2;
      background-color: #e3f2fd;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 13px;
      letter-spacing: 0.5px;
    }
    h2 {
      margin: 0 0 8px 0;
      font-size: 16px;
      color: #333;
    }
    `
  ]
})
export class ChildComponent {
  @Input() car!: carI;
  @Output() carSelected = new EventEmitter<carI>();

  selectCar() {
    this.carSelected.emit(this.car);
  }
}