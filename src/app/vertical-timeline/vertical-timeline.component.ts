import { Component, input, InputSignal, ViewEncapsulation } from '@angular/core';
import { IVerticalTimelineItem } from './models/interfaces/vertical-timeline.interface';
import { IconComponent } from '../icon/icon.component';
import { NgClass } from '@angular/common';
import { ICONS } from '../icon/models/icon.const';

@Component({
  selector: 'vertical-timeline',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './vertical-timeline.component.html',
  styleUrl: './vertical-timeline.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class VerticalTimelineComponent {
  list: InputSignal<IVerticalTimelineItem[]> =
    input.required<Array<IVerticalTimelineItem>>();

  ICONS = ICONS;
}
