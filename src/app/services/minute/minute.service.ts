import { Injectable } from '@angular/core';
import {MinuteHeader} from 'src/app/models/minuteHeader/minute-header.model';

@Injectable({
  providedIn: 'root'
})
export class MinuteService {

  constructor() { }

  getMinutes() : Array<MinuteHeader> {
    const minuteHeadersList : Array<MinuteHeader> = [];

    for(let i = 1; i < 10; i++) {
      minuteHeadersList.push({
        _id: "fgjfjgfkgnfdnd",
        date: new Date(),
        index: i
      })
    }

    return minuteHeadersList;
  }
}
