import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FeedModule } from '../feed/feed.module';
import { HomePage } from './home.page';
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            FeedModule,
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild([
                {
                    path: '',
                    component: HomePage
                }
            ])
        ],
        declarations: [HomePage]
    })
], HomePageModule);
export { HomePageModule };
//# sourceMappingURL=home.module.js.map