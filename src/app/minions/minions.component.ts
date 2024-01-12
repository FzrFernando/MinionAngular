import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minions';
import { CommonModule } from '@angular/common';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent implements OnInit,OnChanges{
  
  @Input() mensaje!: string;
  @Output() eventoClic = new EventEmitter<void>();
  // @Input() minions: Minion[] = [];
  minions : Minion[] = [];
  @Input() searchTerm: string = '';

  constructor(private minionsService: MinionService){
  }

  ngOnInit(){
    this.minionsService.getMinions().subscribe({
      next: (minions) => this.minions = minions
    });
  }

  enviarEvento() {
    this.eventoClic.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.minionsService.getMinions().subscribe({
      next: (minions) => this.minions = minions
    });
  }
}
