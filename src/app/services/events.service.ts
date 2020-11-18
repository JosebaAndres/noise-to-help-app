import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventModel } from '../models/event-model';

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(private http: HttpClient) {}
  getEvents(): Observable<Array<EventModel>> {
    return this.http.get('./db/events/events.json').pipe(
      map((result: Array<EventModel>) => {
        return result;
      }),
    );
  }
}
