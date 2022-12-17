import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loginAction } from 'src/app/loginStore/user.action';
import { selectUsers } from 'src/app/loginStore/user.selector';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserState } from 'src/app/loginStore/user.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean;
  private unsubscribe = new Subject<void>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
      this.store.pipe(
        select(selectUsers),
        takeUntil(this.unsubscribe)
      ).subscribe(isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
      });
  }

  logout(isLoggedIn: boolean): void {
    this.store.dispatch(loginAction({isLoggedIn}));
  }

  login(isLoggedIn: boolean): void {
    this.store.dispatch(loginAction({isLoggedIn}));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
