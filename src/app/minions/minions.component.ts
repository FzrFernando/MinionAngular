import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Minion } from '../interfaces/minions';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { MinionService } from '../services/minion.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, catchError, ignoreElements, of } from 'rxjs';

@Component({
  selector: 'app-minions',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, JsonPipe],
  templateUrl: './minions.component.html',
  styleUrl: './minions.component.css'
})
export class MinionsComponent implements OnInit,OnChanges{
  error: boolean = false;
  @Input() mensaje!: string;
  @Output() eventoClic = new EventEmitter<void>();
  // @Input() minions: Minion[] = [];
  minions$! : Observable<Minion[]>;
  minionError$!: Observable<any>;
  errorMessage: any = null;
  @Input() searchTerm: string = '';

  constructor(private minionsService: MinionService, private router: Router){}

  ngOnInit(){
    // this.minionsService.getMinions().subscribe({
    //   next: (minions) => {
    //     this.minions = minions;
    //     this.error = false;
    //   },
    //   error: (error) => this.error = true
    // })
    this.minions$ = this.minionsService.getMinions();
    this.minionError$ = this.minions$.pipe(
      ignoreElements(),
      catchError((err)=>of(err))
    )
  }

  enviarEvento() {
    this.eventoClic.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.minionsService.getMinions().subscribe({
    //   next: (minions) => this.minions = minions
    // });
  }

  goToDetails(id:number){
    this.router.navigate(['/minions',id])
  }
}
