import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ModalController } from '@ionic/angular';
let AuthRegisterComponent = class AuthRegisterComponent {
    constructor(formBuilder, auth, modal) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.modal = modal;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            password_confirm: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            name: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+$')
            ]))
        }, { validators: this.passwordsMatch });
    }
    onSubmit($event) {
        $event.preventDefault();
        if (!this.registerForm.valid) {
            return;
        }
        const newuser = {
            email: this.registerForm.controls.email.value,
            name: this.registerForm.controls.name.value
        };
        this.auth.register(newuser, this.registerForm.controls.password.value)
            .then((user) => {
            this.modal.dismiss();
        })
            .catch((e) => {
            this.error = e.statusText;
            throw e;
        });
    }
    passwordsMatch(group) {
        return group.controls.password.value === group.controls.password_confirm.value ? null : { passwordsMisMatch: true };
    }
};
AuthRegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-auth-register',
        templateUrl: './auth-register.component.html',
        styleUrls: ['./auth-register.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthService,
        ModalController])
], AuthRegisterComponent);
export { AuthRegisterComponent };
//# sourceMappingURL=auth-register.component.js.map