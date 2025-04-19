import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { IVerticalTimelineItem } from './vertical-timeline/models/interfaces/vertical-timeline.interface';
import { ICONS } from './icon/models/icon.const';
import { LogoStripComponent } from './logo-strip/logo-strip.component';
import { LOGO_STRIP_MOCK } from './logo-strip/models/const/logo-strip.const';
import { ILogoStrip } from './logo-strip/models/interfaces/logo-strip.interface';
import { VERTICAL_TIMELINE_MOCKS } from './vertical-timeline/models/const/vertical-timeline.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerticalTimelineComponent, LogoStripComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'vertical-timeline';
  verticalTimelineList: Array<IVerticalTimelineItem> = VERTICAL_TIMELINE_MOCKS;

  logoStripList: ILogoStrip[] = LOGO_STRIP_MOCK;
}
