import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {AuthState} from "./store/auth.state";
import {AuthenticationInterface, AuthUpdate} from "./store/model/auth.model";

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
    this.store.select(AuthState.getAuthObject).subscribe({
      next: (value) => {
        this.currentAuth.push(value);
      }
    })
    this.deleteStore(0);
  }

  updateStore() {
    this.store.dispatch(
      new AuthUpdate({
      token: this.text
    })
    );
  }

  deleteStore(index: number) {
    const updatedAuth = [...this.currentAuth];
    const deletedItem = this.currentAuth[index];
    updatedAuth.splice(index, 1);
    this.store.dispatch(
      new AuthUpdate({
        token: deletedItem.token
      })
    );
    this.currentAuth = updatedAuth;
  }
}
