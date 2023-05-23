import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
private url='http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  
  getUsers(){
    this.http.get(this.url).subscribe(data => {
      console.log(data);
    });
    console.log("Esto se ejecutará antes que el console log de arriba");
  }
  
}
