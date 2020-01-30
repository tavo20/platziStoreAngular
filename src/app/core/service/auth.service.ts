import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { repeatWhen } from 'rxjs/operators';
import { TokenService } from './../services/token.service';
import { tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private af: AngularFireAuth,
    private http: HttpClient,
    private token: TokenService
  ) { }
  createUser(email: string, password: string) {
    console.log(email);
   return this.af.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.af.auth.signOut();
  }

  hasUser() {
  return  this.af.authState;
      // .subscribe(() => {

      // }, (er) => {

      // });
  }
  loginRestApi(email: string, password: string) {
    return this.http.post('https://platzi-store.herokuapp.com/auth', {email, password})
      // .pipe(
      //   tap(
      //     (data: {token: string}) => {
      //       const token = data.token;
      //       // No guardarlo en localStorage
      //       this.token.savetoken(token);
      //     }
      //   )
      // )
  }
}
