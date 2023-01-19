import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { UserService } from '../../_services/user.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {

    public users : Array<User> = [];

    constructor(private userService: UserService) {}
    
    ngOnInit() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user?.isDeleting == true;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }
}