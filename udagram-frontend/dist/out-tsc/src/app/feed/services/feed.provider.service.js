import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../../api/api.service';
let FeedProviderService = class FeedProviderService {
    constructor(api) {
        this.api = api;
        this.currentFeed$ = new BehaviorSubject([]);
    }
    getFeed() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const req = yield this.api.get('/feed');
            const items = req.rows;
            this.currentFeed$.next(items);
            return Promise.resolve(this.currentFeed$);
        });
    }
    uploadFeedItem(caption, file) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const res = yield this.api.upload('/feed', file, { caption: caption, url: file.name });
            const feed = [res, ...this.currentFeed$.value];
            this.currentFeed$.next(feed);
            return res;
        });
    }
};
FeedProviderService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ApiService])
], FeedProviderService);
export { FeedProviderService };
//# sourceMappingURL=feed.provider.service.js.map