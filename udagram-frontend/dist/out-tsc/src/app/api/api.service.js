var ApiService_1;
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
const API_HOST = environment.apiHost;
let ApiService = ApiService_1 = class ApiService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    static handleError(error) {
        alert(error.message);
    }
    static extractData(res) {
        const body = res;
        return body || {};
    }
    setAuthToken(token) {
        this.httpOptions.headers = this.httpOptions.headers.append('Authorization', `jwt ${token}`);
        this.token = token;
    }
    get(endpoint) {
        const url = `${API_HOST}${endpoint}`;
        const req = this.http.get(url, this.httpOptions).pipe(map(ApiService_1.extractData));
        return req
            .toPromise()
            .catch((e) => {
            ApiService_1.handleError(e);
            throw e;
        });
    }
    post(endpoint, data) {
        const url = `${API_HOST}${endpoint}`;
        return this.http.post(url, data, this.httpOptions)
            .toPromise()
            .catch((e) => {
            ApiService_1.handleError(e);
            throw e;
        });
    }
    upload(endpoint, file, payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const signed_url = (yield this.get(`${endpoint}/signed-url/${file.name}`)).url;
            const headers = new HttpHeaders({ 'Content-Type': file.type });
            const req = new HttpRequest('PUT', signed_url, file, {
                headers: headers,
                reportProgress: true,
            });
            return new Promise(resolve => {
                this.http.request(req).subscribe((resp) => {
                    if (resp && resp.status && resp.status === 200) {
                        resolve(this.post(endpoint, payload));
                    }
                });
            });
        });
    }
};
ApiService = ApiService_1 = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map