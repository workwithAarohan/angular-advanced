import { Injectable, OnInit } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { selectUsers } from '../loginStore/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;

  constructor(private readonly store: Store) { }

  isAuthenticated(): boolean
  {
    this.store.pipe(
      select(selectUsers)
    ).subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    });

    return this.isLoggedIn;
  }


}
