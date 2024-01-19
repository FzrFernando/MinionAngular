import { Component, Input, OnInit } from '@angular/core';
import { Minion } from '../interfaces/minions';
import { FormsModule } from '@angular/forms';
import { MinionService } from '../services/minion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minion-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './minion-form.component.html'
})
export class MinionFormComponent implements OnInit{

  minion: Omit<Minion,'id'> = {
    name: '',
    bio: '',
    side: '',
    img: '',
    birth: ''
  }
  exito: boolean = false;
  @Input() id! : number;
  edit: boolean = false;


  constructor(private minionService: MinionService){}

  ngOnInit(): void {
    if (this.id) {
      this.minionService.getMinion(this.id)
      .subscribe({
        next: (minion)=> {
          this.minion = minion;
          this.edit = true;
        },
        error: (error)=> console.log(error)
      })
    }
  }

  submit(){
    if (this.edit) {
      this.minionService.updateMinion(this.id,this.minion)
      .subscribe({
        next: (minion) => this.exito = true
      })
    } 
    else {
      this.minionService.addMinion(this.minion)
      .subscribe({
        next: (minion) => {
          this.exito = true
          this.minion = {
            name: '',
            bio: '',
            side: '',
            img: '',
            birth: ''
          }
        }
      })

    } 
  }

  close(){
    this.exito = false;
  }
}
