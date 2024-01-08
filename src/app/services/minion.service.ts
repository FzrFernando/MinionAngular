import { Injectable } from '@angular/core';
import { Minion } from '../interfaces/minions';

@Injectable({
  providedIn: 'root'
})
export class MinionService {
  minions: Minion[] = [
    {
      name: "Kevin",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/kevin.jpg",
      birth: "1951",
      side:"de los buenos"
    },
    {
      name: "Josua",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/Josua.jpg",
      birth: "1672",
      side:"malvado"
    },
    {
      name: "Dave",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/dave.jpg",
      birth: "1723",
      side: "de los buenos"
    },
    {
      name: "Mudito",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/mudito.jpeg",
      birth: "1379",
      side:"de los buenos"
    },
    {
      name: "Llongueras",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/llongueras.jpg",
      birth: "1687",
      side: "malvado"
    },
    {
      name: "Minioncé",
      bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
      img: "assets/img/minionce.jpg",
      birth: "1976",
      side: "de los buenos"
    },
    {
      name: "Lobeznion",
      bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
      img: "assets/img/lobeznion.jpg",
      birth: "2017",
      side: "malvado"
    },
    {
      name: "Minion Presley",
      bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
      img: "assets/img/minion-presley.jpg",
      birth: "2017",
      side: "malvado"
    }
  ]

  constructor() { 
    console.log('Servicio iniciado')
  }

  getMinions(): Minion[]{
    return this.minions;
  }

  getFilterMinions(term: string): Minion[]{
    return this.minions.filter(minion => minion.name.toLowerCase().includes(term.toLowerCase()));
  } 
}
