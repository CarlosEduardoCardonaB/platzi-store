import { Injectable } from '@angular/core';
import {  AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth
  ) { }

  createUser(email: string, pass: string){
   return this.afauth.createUserWithEmailAndPassword(email, pass);
  }

  login(email: string, pass: string)
  {
    return this.afauth.signInWithEmailAndPassword(email, pass);
  }

  logout(){
    return this.afauth.signOut();
  }

  hasUser(){
    return this.afauth.authState;
    };
  
    

}
