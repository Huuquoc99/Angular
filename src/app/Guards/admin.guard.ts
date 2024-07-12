import { UserService } from "./../user.service";
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const user={
    name:'admin',
    role:'admin'
  }
  const router = new Router();
if (user.role=='admin') {
    return true
} else {
  router.navigate(['']);
  return false;
}
 
};
