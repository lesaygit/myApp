import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { pipe, tap } from 'rxjs';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  usuarios: User[] = [];

  constructor(private usersService: UserService) { }

  ngOnInit(): void {
    this.usersService.getUsers().pipe(
      tap(resp => {
        //console.log(resp);
        this.usuarios = resp;
      })
    ).subscribe();
  }

}