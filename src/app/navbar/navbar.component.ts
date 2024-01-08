import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() onSearch : EventEmitter<string> = new EventEmitter<string>();

  searchTerm: string = '';
  constructor(private minionService: MinionService){}

  search() {
    this.onSearch.emit(this.searchTerm);
  }

}
