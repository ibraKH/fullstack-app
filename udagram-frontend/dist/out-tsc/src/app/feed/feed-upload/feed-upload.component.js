import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { FeedProviderService } from '../services/feed.provider.service';
import { LoadingController, ModalController } from '@ionic/angular';
let FeedUploadComponent = class FeedUploadComponent {
    constructor(feed, formBuilder, loadingController, modalController) {
        this.feed = feed;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.uploadForm = this.formBuilder.group({
            caption: new FormControl('', Validators.required)
        });
    }
    setPreviewDataUrl(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.previewDataUrl = reader.result;
        };
        reader.readAsDataURL(file);
    }
    selectImage(event) {
        const file = event.srcElement.files;
        if (!file) {
            return;
        }
        this.file = file[0];
        this.setPreviewDataUrl(this.file);
    }
    onSubmit($event) {
        $event.preventDefault();
        this.loadingController.create();
        if (!this.uploadForm.valid || !this.file) {
            return;
        }
        this.feed.uploadFeedItem(this.uploadForm.controls.caption.value, this.file)
            .then((result) => {
            this.modalController.dismiss();
            this.loadingController.dismiss();
        });
    }
    cancel() {
        this.modalController.dismiss();
    }
};
FeedUploadComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed-upload',
        templateUrl: './feed-upload.component.html',
        styleUrls: ['./feed-upload.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FeedProviderService,
        FormBuilder,
        LoadingController,
        ModalController])
], FeedUploadComponent);
export { FeedUploadComponent };
//# sourceMappingURL=feed-upload.component.js.map