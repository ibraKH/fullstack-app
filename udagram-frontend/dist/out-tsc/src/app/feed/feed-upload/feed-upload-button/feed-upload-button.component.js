import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FeedUploadComponent } from '../feed-upload.component';
import { AuthService } from 'src/app/auth/services/auth.service';
let FeedUploadButtonComponent = class FeedUploadButtonComponent {
    constructor(modalController, auth) {
        this.modalController = modalController;
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.currentUser$.subscribe((user) => {
            this.isLoggedIn = user !== null;
        });
    }
    ngOnDestroy() {
        if (this.loginSub) {
            this.loginSub.unsubscribe();
        }
    }
    presentUploadForm(ev) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: FeedUploadComponent,
            });
            return yield modal.present();
        });
    }
};
FeedUploadButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed-upload-button',
        templateUrl: './feed-upload-button.component.html',
        styleUrls: ['./feed-upload-button.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController, AuthService])
], FeedUploadButtonComponent);
export { FeedUploadButtonComponent };
//# sourceMappingURL=feed-upload-button.component.js.map