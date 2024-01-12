import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MinionsComponent } from './minions/minions.component';
import { MinionService } from './services/minion.service';
import { Minion } from './interfaces/minions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, MinionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'minions';
  // initialMinions:Minion[] = 
  searchTerm: string = '';


  manejarClic() {
    console.log('Se hizo clic en el botón en el componente hijo.');
  }

  // minions: Minion[] = this.initialMinions;

  search(term:string){
    this.searchTerm = term;
  }
}
