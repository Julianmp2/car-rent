import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="logo.png" alt="Logo">
      </div>
      <button class="navbar-toggle" (click)="toggleMenu()">☰</button>
      <ul class="navbar-menu" [class.active]="isMenuOpen">
        <li class="dropdown">
          <a href="#" class="dropdown-trigger">Productos</a>
          <div class="dropdown-content">
            <div class="dropdown-grid">
              <div class="dropdown-section">
                <h3>Mantenimiento</h3>
                <a href="#">Aceite</a>
                <a href="#">Llantas</a>
                <a href="#">Baterias</a>
                <a href="#">Otros</a>
              </div>
              <div class="dropdown-section">
                <h3>Accesorios</h3>
                <a href="#">Luces</a>
                <a href="#">Herramientas</a>
                <a href="#">Interior</a>
              </div>
              <div class="dropdown-image">
                <img src="https://via.placeholder.com/150" alt="Accesorios">
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-trigger">Carros</a>
          <div class="dropdown-content">
            <div class="dropdown-grid">
              <div class="dropdown-section">
                <h3>Marca</h3>
                <a href="#">Nissan</a>
                <a href="#">BMW</a>
                <a href="#">Toyota</a>
              </div>
              <div class="dropdown-section">
                <h3>Lujo</h3>
                <a href="#">Tesla</a>
                <a href="#">Honda</a>
                <a href="#">Audi</a>
              </div>
              <div class="dropdown-image">
                <img src="https://via.placeholder.com/150" alt="Carros">
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-trigger">Camionetas</a>
          <div class="dropdown-content">
            <div class="dropdown-grid">
              <div class="dropdown-section">
                <h3>Marcas</h3>
                <a href="#">Toyota</a>
                <a href="#">Nissan</a>
                <a href="#">Honda</a>
              </div>
              <div class="dropdown-section">
                <h3>Otras</h3>
                <a href="#">Ford</a>
                <a href="#">KIA</a>
                <a href="#">Hyundai</a>
              </div>
              <div class="dropdown-image">
                <img src="https://via.placeholder.com/150" alt="Camionetas">
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-trigger">Autos de lujo</a>
          <div class="dropdown-content">
            <div class="dropdown-grid">
              <div class="dropdown-section">
                <h3>Marca</h3>
                <a href="#">Rolls-Royce</a>
                <a href="#">Lamborghini</a>
                <a href="#">Porsche</a>
              </div>
              <div class="dropdown-section">
                <h3>Limusinas</h3>
                <a href="#">Lincoln</a>
                <a href="#">Cadillac</a>
                <a href="#">Bentley</a>
              </div>
              <div class="dropdown-image">
                <img src="https://via.placeholder.com/150" alt="Autos de lujo">
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-trigger">Ofertas</a>
          <div class="dropdown-content">
            <div class="dropdown-grid">
              <div class="dropdown-section">
                <h3>Descuentos</h3>
                <a href="#">Prueba de un día</a>
                <a href="#">Renta a 30% de descuento en carros</a>
                <a href="#">Renta a 15% de descuento en camionetas</a>
                <a href="#">5 días extra en carros y camionetas</a>
              </div>
              <div class="dropdown-section">
                <h3>Servicios</h3>
                <a href="#">Mantenimiento</a>
                <a href="#">Limpieza</a>
                <a href="#">Asesoría</a>
              </div>
              <div class="dropdown-image">
                <img src="https://via.placeholder.com/150" alt="Ofertas">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #2c3e50;
      color: #ecf0f1;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
    }
    .navbar-logo img {
      height: 50px;
    }

    .navbar-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #ecf0f1;
    }

    .navbar-menu {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;
      flex-grow: 1;
    }
    .navbar-menu li {
      margin: 0 1rem;
      position: relative;
    }
    .navbar-menu li a {
      text-decoration: none;
      color: #ecf0f1;
      font-weight: bold;
      transition: color 0.3s ease;
    }
    .navbar-menu li a:hover {
      color: #3498db;
    }
    .dropdown-content {
      display: block;
      position: fixed;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #2c3e50; /* Mismo color que el navbar */
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      padding: 2rem;
      opacity: 0;
      transform: translateY(10px);
      visibility: hidden;
      transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
    }

    .dropdown:hover .dropdown-content,
    .dropdown:focus-within .dropdown-content {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }

    .dropdown-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .dropdown-section {
      display: flex;
      flex-direction: column;
    }
    .dropdown-section h3 {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      color: #ecf0f1; /* Mismo color que el texto del navbar */
    }
    .dropdown-section a {
      display: block;
      padding: 0.5rem 0;
      color: #bdc3c7; /* Color más claro para los enlaces */
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .dropdown-section a:hover {
      color: #3498db; /* Color azul al hacer hover */
      background-color: rgba(255, 255, 255, 0.1); /* Fondo sutil al hacer hover */
    }
    .dropdown-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    @media (max-width: 768px) {
      .navbar-toggle {
        display: block;
      }
      .navbar-menu {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color:rgb(44, 45, 80); /* Mismo color que el navbar */
        position: absolute;
        top: 60px;
        left: 0;
        z-index: 1000;
        padding: 0.25rem 0;
      }
      .navbar-menu.active {
        display: flex;
      }
      .navbar-menu li {
        margin: 0;
        text-align: center;
        padding: 0.25rem 0;
      }
      .navbar-menu li a {
        font-size: 0.9rem;
        padding: 0.1rem 0;
      }
      .dropdown-content {
        position: static;
        width: 100%;
        box-shadow: none;
        padding: 0.5rem;
      }
      .dropdown-grid {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      .dropdown-section h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }
      .dropdown-section a {
        padding: 0.1rem 0;
      }
    }
    `
  ]
})
export class NavComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}