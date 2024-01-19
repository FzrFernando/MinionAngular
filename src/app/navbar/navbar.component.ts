import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  // @Output() onSearch : EventEmitter<string> = new EventEmitter<string>();

  searchTerm: string = '';
  constructor(private minionService: MinionService, private router: Router){}

  search() {
    // this.onSearch.emit(this.searchTerm);
    this.router.navigate(['search', this.searchTerm])
  }

  searchLink() {
    this.router.navigate(['minions/'+this.searchTerm])
  }
}
