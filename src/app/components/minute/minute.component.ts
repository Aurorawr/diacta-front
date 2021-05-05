import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Minute, defaultMinute } from 'src/app/models/minute/minute.model';
import { MinuteService } from 'src/app/services/minute/minute.service';

@Component({
  selector: 'app-minute',
  templateUrl: './minute.component.html',
  styleUrls: ['./minute.component.scss']
})
export class MinuteComponent implements OnInit {

  minute : Minute = defaultMinute;

  constructor(
    private route : ActivatedRoute,
    private minuteService: MinuteService
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));

    this.minute = this.minuteService.getMinute();
  }

}
