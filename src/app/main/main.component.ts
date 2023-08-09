import { Component } from '@angular/core';
import  * as regular  from '@fortawesome/free-regular-svg-icons';
import * as brand from '@fortawesome/free-brands-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public randomIcon!: IconDefinition;

  private readonly iconList = { ...regular.far, ...brand.fab, ...solid.fas };

  private iconArray: IconDefinition[] = [];

  public buttonTitle = 'Click me!';

  constructor() {
    for (const item in this.iconList) {
      this.iconArray.push(this.iconList[item]);
    }
  }

  changeIcon() {
    const index = Math.floor(Math.random() * this.iconArray.length);
    setTimeout(() =>{
      this.randomIcon = this.iconArray[index];
      this.buttonTitle = 'Change icon';
    }, 3000);
  }
}
