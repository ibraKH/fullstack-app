import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthMenuUserComponent } from './auth-menu-user/auth-menu-user.component';
import { AuthService } from '../services/auth.service';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthRegisterComponent } from '../auth-register/auth-register.component';
let AuthMenuButtonComponent = class AuthMenuButtonComponent {
    constructor(auth, modalController) {
        this.auth = auth;
        this.modalController = modalController;
    }
    presentmodal(ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: AuthMenuUserComponent,
            });
            return yield modal.present();
        });
    }
    presentLogin(ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: AuthLoginComponent,
            });
            return yield modal.present();
        });
    }
    presentRegister(ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: AuthRegisterComponent,
            });
            return yield modal.present();
        });
    }
    logout() {
        this.auth.logout();
    }
    ngOnInit() { }
};
AuthMenuButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-auth-menu-button',
        templateUrl: './auth-menu-button.component.html',
        styleUrls: ['./auth-menu-button.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService,
        ModalController])
], AuthMenuButtonComponent);
export { AuthMenuButtonComponent };
//# sourceMappingURL=auth-menu-button.component.js.map