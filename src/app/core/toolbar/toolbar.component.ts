import { Component, OnInit, Input } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { User } from '../models';
import { UserService } from '../services/user/user.service';
import { ToolbarHelpers } from './toolbar.helpers';

@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;
  user$: Observable<User> = EMPTY;
  searchOpen: boolean = false;
  toolbarHelpers = ToolbarHelpers;
  constructor(private userService: UserService) {
    this.user$ = this.userService.getUserObservable();
  }

  ngOnInit() {}

  onLogout(): void {
    this.userService.logoutUser();
  }
}
