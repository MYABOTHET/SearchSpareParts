import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let auth_service: AuthService = inject(AuthService);
  let router: Router = inject(Router);
  if (auth_service.isAuth()) {
    return true;
  } else {
    router.navigate(['authorization']);
    return false;
  }
};
