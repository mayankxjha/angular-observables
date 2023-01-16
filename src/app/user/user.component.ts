import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;

  constructor(private route: ActivatedRoute, private userServ: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    console.log(this.id);
    });
  }
    onActivate(){
      this.userServ.activateBool.next(true);
    }
    ngOnDestroy() {
      this.userServ.activateBool.next(false);
    }
}
