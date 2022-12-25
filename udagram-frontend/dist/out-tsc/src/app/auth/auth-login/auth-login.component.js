import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
let AuthLoginComponent = class AuthLoginComponent {
    constructor(formBuilder, auth, modal) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.modal = modal;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            password: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ]))
        });
    }
    onSubmit($event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            $event.preventDefault();
            if (!this.loginForm.valid) {
                return;
            }
            this.auth.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
                .then((user) => {
                this.modal.dismiss();
            })
                .catch((e) => {
                this.error = e.statusText;
                throw e;
            });
        });
    }
};
AuthLoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-auth-login',
        templateUrl: './auth-login.component.html',
        styleUrls: ['./auth-login.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthService,
        ModalController])
], AuthLoginComponent);
export { AuthLoginComponent };
//# sourceMappingURL=auth-login.component.js.map