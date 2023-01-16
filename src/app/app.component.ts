import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  activatedP = false;
  boolSubscription: Subscription;
  constructor(private userServe: UserService) {}

  ngOnInit() {
    this.boolSubscription = this.userServe.activateBool.subscribe(emittedBool=>{
      this.activatedP = emittedBool;
    });
  }
  ngOnDestroy() {
    this.boolSubscription.unsubscribe();
  }
}
