import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
let AuthGuardService = class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.auth.currentUser$.value) {
            this.router.navigateByUrl('/login');
        }
        return this.auth.currentUser$.value !== null;
    }
};
AuthGuardService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        Router])
], AuthGuardService);
export { AuthGuardService };
//# sourceMappingURL=auth.guard.service.js.map