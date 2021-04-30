import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {MinuteHeader} from 'src/app/models/minuteHeader/minute-header.model';
import { MinuteService } from 'src/app/services/minute/minute.service'

@Component({
  selector: 'app-minutes',
  templateUrl: './minutes.component.html',
  styleUrls: ['./minutes.component.scss']
})
export class MinutesComponent {

  minutes : Array<MinuteHeader> = [];

  constructor(
    private minutesService : MinuteService
  ) {}

  ngOnInit() {
    this.minutes = this.minutesService.getMinutes();
  }

}
