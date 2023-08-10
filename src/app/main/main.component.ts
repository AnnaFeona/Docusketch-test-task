import { Component } from '@angular/core';
import { IconsService } from '../services/icons.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public randomIcon!: IconDefinition;

  public buttonTitle = 'Click me!';

  constructor(private icon: IconsService) {}

  changeIcon() {
    setTimeout(() =>{
      this.randomIcon = this.icon.getRandom();
      this.buttonTitle = 'Change icon';
    }, 3000);
  }
}
