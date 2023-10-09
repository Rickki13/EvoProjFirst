import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {DataService} from "./data.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class RolesGuard implements CanActivateChild {
  constructor(
    private dataService: DataService,
    private router: Router
  ) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.dataService.role === 'admin') {
      return true;
    }
    else {
      return this.router.navigateByUrl('/error')
    }
  }
}

