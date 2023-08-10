import { Injectable } from '@angular/core';
import  * as regular  from '@fortawesome/free-regular-svg-icons';
import * as brand from '@fortawesome/free-brands-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


@Injectable({
  providedIn: 'root'
})
export class IconsService {
  private readonly iconList = { ...regular.far, ...brand.fab, ...solid.fas };

  private iconArray: IconDefinition[] = [];

  constructor() {
    for (const item in this.iconList) {
      this.iconArray.push(this.iconList[item]);
    }
  }

  public getRandom(): IconDefinition {
    const index = Math.floor(Math.random() * this.iconArray.length);

    return this.iconArray[index];
  }
}
