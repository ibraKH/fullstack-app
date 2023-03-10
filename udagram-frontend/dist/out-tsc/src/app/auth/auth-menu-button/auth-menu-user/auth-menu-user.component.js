import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
let AuthMenuUserComponent = class AuthMenuUserComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
AuthMenuUserComponent = tslib_1.__decorate([
    Component({
        selector: 'app-auth-menu-user',
        templateUrl: './auth-menu-user.component.html',
        styleUrls: ['./auth-menu-user.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], AuthMenuUserComponent);
export { AuthMenuUserComponent };
//# sourceMappingURL=auth-menu-user.component.js.map