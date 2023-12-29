import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increceByOne( 1 )">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increceByOne( -1 )">-1</button>
  `,
})
export class counterComponent {
  public counter: number = 10;

  increceByOne( value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

}
