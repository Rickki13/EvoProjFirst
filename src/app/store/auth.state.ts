import {Action, Selector, State, StateContext} from "@ngxs/store";
import {AuthenticationInterface, AuthUpdate} from "./model/auth.model";
import {Injectable} from "@angular/core";

@State<AuthenticationInterface>({
  name: 'AuthState',
  defaults: {
    token: null
  }
})
@Injectable()
export class AuthState{
  @Selector()
  static getToken(state: AuthenticationInterface) {
    return state.token;
  }
  @Selector()
  static getAuthObject(state: AuthenticationInterface){
    return state
  }
  @Action(AuthUpdate)
  updateUserModel(ctx: StateContext<AuthenticationInterface>, action: AuthUpdate) {
    ctx.patchState({
      token: action.payload.token
    })
  }
}
