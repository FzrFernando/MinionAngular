import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { CommonModule } from '@angular/common';
import { Minion } from '../interfaces/minions';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-minion.component.html'
})
export class InfoMinionComponent implements OnInit,OnChanges{

  @Input() id : string = '';

  minion!: Minion;

  constructor(private minionsService: MinionService){
  }

  ngOnInit(): void {
    this.minionsService.getMinion(this.id).subscribe({
      next: (minion) => this.minion = minion
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.minionsService.getMinion(this.id).subscribe({
      next: (minion) => this.minion = minion
    });
  }
}
