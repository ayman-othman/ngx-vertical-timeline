import {
  Component,
  input,
  InputSignal,
  ViewEncapsulation,
} from '@angular/core';
import { ICONS, IconsType } from './models/icon.const';
import { NgClass } from '@angular/common';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  public name: InputSignal<IconsType> = input.required();
  public size: InputSignal<number> = input(3);
  class: InputSignal<string> = input('');

  // Public
  public ICONS = ICONS;
}
