import { Component, input, InputSignal } from '@angular/core';
import { ILogoStrip } from './models/interfaces/logo-strip.interface';

@Component({
  selector: 'logo-strip',
  standalone: true,
  imports: [],
  templateUrl: './logo-strip.component.html',
  styleUrl: './logo-strip.component.scss'
})
export class LogoStripComponent {

  list: InputSignal<Array<ILogoStrip>>= input.required()
}
