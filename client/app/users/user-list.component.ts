import {Component, OnInit}   from '@angular/core';
import {OnActivate, Router, RouteSegment, RouteTree} from '@angular/router';
import {User, UserService}   from './user.service';


@Component({
    template: `
    <div class="page-content mdl-grid">
        <div class="mdl-grid--no-spacing mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">

        <div class="users-card-wide">
            <div class="mdl-card__title mdl-color--purple-700">
                <h1 class="mdl-card__title-text">Users</h1>
            </div>
            <div class="mdl-list">
              <div class="mdl-list__item mdl-list__item--two-line" *ngFor="let user of users"
                [class.selected]="isSelected(user)"
                (click)="onSelect(user)">
                <span class="mdl-list__item-primary-content">
                  <img class="user-list-avatar mdl-list__item-avatar" src="assets/img/users/user-{{user.id}}.jpg">
                  <span>{{user.name}}</span>
                  <span class="mdl-list__item-sub-title">
                    {{user.mail}}
                  </span>
                </span>
                <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
              </div>
            </div>
        </div>
    </div>
  `,
      providers: [UserService],
})
export class UserListComponent implements OnActivate {
    users:User[];
    errorMessage:string;

    private selectedId:number;


    constructor(private service:UserService,
                private router:Router) {
    }

    routerOnActivate(curr:RouteSegment, prev?:RouteSegment, currTree?:RouteTree, prevTree?:RouteTree):void {
        this.selectedId = +curr.getParam('id');
        this.service.getUsers().subscribe(
            users => this.users = users,
            error =>  this.errorMessage = <any>error);
    }


    isSelected(user:User) {
        return user.id === this.selectedId;
    }

    onSelect(user:User) {
        this.router.navigate(['/user', user.id]);
    }
}