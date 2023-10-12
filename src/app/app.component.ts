import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {AuthState} from "./store/auth.state";
import {AuthenticationInterface, AuthUpdate} from "./store/model/auth.model";
import {interval} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EvoProjFirst';

  constructor(private store: Store) {}

  currentAuth: AuthenticationInterface[] = [];
  text = '';
  ngOnInit() {
    console.log(this.store.selectSnapshot(AuthState.getToken));
    console.log(this.store.selectSnapshot(AuthState.getAuthObject));

    this.store.select(AuthState.getAuthObject).subscribe({
      next: (value) => {
        this.currentAuth.push(value);
      }
    })
  }

  updateStore() {
    this.store.dispatch(
      new AuthUpdate({
      token: this.text
    })
    );
  }

/*  deleteStore() {
    this.store.dispatch(
      new AuthUpdate({
        token: null
      })
    );
  }*/
  deleteStore() {
    this.store.reset(
      new AuthUpdate({
        token: null
      })
    );
  }

}
