import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppState } from '../core/store/state/app.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  @Select(AppState.getAppLog) log$: Observable<any>;
  @ViewChild('logContainer', {static: true}) logContainer: ElementRef;
  logScroll: 0;
  constructor() { }

  ngOnInit() {
    this.log$.pipe(
      map(() => {
        this.logScroll = this.logContainer.nativeElement.scrollHeight;
      })
    ).subscribe();
  }

}
