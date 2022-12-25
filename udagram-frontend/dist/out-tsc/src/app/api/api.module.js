import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
const components = [];
let ApiModule = class ApiModule {
};
ApiModule = tslib_1.__decorate([
    NgModule({
        imports: [
            HttpClientModule,
        ],
        declarations: components,
        exports: components,
        providers: []
    })
], ApiModule);
export { ApiModule };
//# sourceMappingURL=api.module.js.map