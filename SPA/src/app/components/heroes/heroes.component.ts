import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Array <Heroe> =[]

  constructor(private servicoHeroes: HeroesService) { 
    this.heroes = this.servicoHeroes.getHeroes();
  }

  ngOnInit(): void {
  }

}
