import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  variable = 0;
  textContent = '';
  allTextContents: string[] = [];

  increment(): void {
    this.variable++;
  }

  addToAllTextContents(value: string): void {
    this.allTextContents.push(value);
  }

  sumCharacters(): number {
    return this.allTextContents.reduce((acc, x) => acc + x.length, 0);
  }

  constructor() { }

  ngOnInit() {
  }

}
