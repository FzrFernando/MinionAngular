import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MinionService } from '../services/minion.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Minion } from '../interfaces/minions';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info-minion',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './info-minion.component.html'
})
export class InfoMinionComponent implements OnInit,OnChanges{

  @Input('id') identifier! : number;

  minion$!: Observable<Minion>;

  constructor(private minionsService: MinionService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    // this.minionsService.getMinion(this.id).subscribe({
    //   next: (minion) => this.minion = minion
    // });
    this.route.params
    .subscribe({
      next: (data)=> {
        this.identifier = data['id'];
        this.minion$ = this.minionsService.getMinion(this.identifier)
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.minionsService.getMinion(this.id).subscribe({
    //   next: (minion) => this.minion = minion
    // });
  }

  return(){
    this.router.navigate(['/minions'])
  }
}
