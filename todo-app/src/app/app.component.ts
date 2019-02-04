import { Component } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

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
}
