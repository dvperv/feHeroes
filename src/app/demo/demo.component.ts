import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroesService} from '../heroes.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  hero: Hero = { id: 1, name: 'Hi' };

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHero().subscribe(h => this.hero = h);
  }

}
