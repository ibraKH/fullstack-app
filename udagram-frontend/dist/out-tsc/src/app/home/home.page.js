import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
let HomePage = class HomePage {
    constructor() {
        this.appName = environment.appName;
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map