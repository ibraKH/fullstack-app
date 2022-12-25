import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FeedProviderService } from '../services/feed.provider.service';
let FeedListComponent = class FeedListComponent {
    constructor(feed) {
        this.feed = feed;
        this.subscriptions = [];
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.subscriptions.push(this.feed.currentFeed$.subscribe((items) => {
                this.feedItems = items;
            }));
            yield this.feed.getFeed();
        });
    }
    ngOnDestroy() {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], FeedListComponent.prototype, "feedItems", void 0);
FeedListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-feed-list',
        templateUrl: './feed-list.component.html',
        styleUrls: ['./feed-list.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FeedProviderService])
], FeedListComponent);
export { FeedListComponent };
//# sourceMappingURL=feed-list.component.js.map