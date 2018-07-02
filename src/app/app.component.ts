import { Component } from '@angular/core';
import { ProgressService } from './api/progress.service';

const buttonArr = [];
const barsArr = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  element: any;
  buttons: any;
  bars: any;
  limit: any;
  indexValue: any;

  constructor(progress: ProgressService) {
    
    progress.getElements()
      .subscribe(component => {
        this.element = component;
        this.limit = this.element.limit;

        this.element.buttons.forEach(button => {
          buttonArr.push(button);
        });

        this.element.bars.forEach(bars => {
          barsArr.push(bars);
        });
        this.bars = barsArr;
        this.buttons = buttonArr;
      });
  }

  clickButton(index, button) {
    
    console.log(this.limit);

    if (this.bars[index] <= this.limit) {
      this.bars[index] = this.bars[index] + button;
    }

    if (this.bars[index] <= 0) {
      this.bars[index] = 0;
    }
    
    if(this.bars[index] > this.limit) {
      this.bars[index] = this.limit;
    }

  }
}
