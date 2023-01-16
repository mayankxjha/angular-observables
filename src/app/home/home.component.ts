import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, Observable} from "rxjs";

import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubs: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubs = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customObs = new Observable(observer => {
      let counter = 0;
      setInterval(() => {
        observer.next(counter);
        if (counter === 9) {
          observer.complete()
        }
        if (counter > 10) {
          observer.error(new Error('Counter greater than 3.'));
        }
        counter++;
      }, 1000)
    });
    this.firstObsSubs = customObs.pipe(filter((data: number) => {
      return data % 2 === 0;
    }), map((data: number) => {
      return 'Round : ' + (data + 1);
    })).subscribe((data) => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('Completed!')
    });
  }

  ngOnDestroy() {
    this.firstObsSubs.unsubscribe();
  }

}
