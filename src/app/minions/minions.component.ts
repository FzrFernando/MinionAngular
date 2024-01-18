import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minions';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MinionService } from '../services/minion.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent implements OnInit,OnChanges{
  error: boolean = false;
  @Input() mensaje!: string;
  @Output() eventoClic = new EventEmitter<void>();
  // @Input() minions: Minion[] = [];
  minions$! : Observable<Minion[]>;
  @Input() searchTerm: string = '';

  constructor(private minionsService: MinionService){}

  ngOnInit(){
    // this.minionsService.getMinions().subscribe({
    //   next: (minions) => {
    //     this.minions = minions;
    //     this.error = false;
    //   },
    //   error: (error) => this.error = true
    // })
    this.minions$ = this.minionsService.getMinions();
  }

  enviarEvento() {
    this.eventoClic.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.minionsService.getMinions().subscribe({
    //   next: (minions) => this.minions = minions
    // });
  }
}
