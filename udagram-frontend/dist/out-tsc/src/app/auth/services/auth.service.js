import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
const JWT_LOCALSTORE_KEY = 'jwt';
const USER_LOCALSTORE_KEY = 'user';
let AuthService = class AuthService {
    constructor(api) {
        this.api = api;
        this.currentUser$ = new BehaviorSubject(null);
        this.initToken();
    }
    initToken() {
        const token = localStorage.getItem(JWT_LOCALSTORE_KEY);
        const user = JSON.parse(localStorage.getItem(USER_LOCALSTORE_KEY));
        if (token && user) {
            this.setTokenAndUser(token, user);
        }
    }
    setTokenAndUser(token, user) {
        localStorage.setItem(JWT_LOCALSTORE_KEY, token);
        localStorage.setItem(USER_LOCALSTORE_KEY, JSON.stringify(user));
        this.api.setAuthToken(token);
        this.currentUser$.next(user);
    }
    login(email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.api.post('/users/auth/login', { email: email, password: password })
                .then((res) => {
                this.setTokenAndUser(res.token, res.user);
                return res;
            })
                .catch((e) => { throw e; });
            // return user !== undefined;
        });
    }
    logout() {
        this.setTokenAndUser(null, null);
        return true;
    }
    register(user, password) {
        return this.api.post('/users/auth/', { email: user.email, password: password })
            .then((res) => {
            this.setTokenAndUser(res.token, res.user);
            return res;
        })
            .catch((e) => { throw e; });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map