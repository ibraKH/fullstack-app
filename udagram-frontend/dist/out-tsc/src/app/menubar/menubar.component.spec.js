import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MenubarComponent } from './menubar.component';
import { environment } from '../../environments/environment';
describe('MenubarPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenubarComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MenubarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('title should be enviornment.AppTitle', () => {
        const app = fixture.nativeElement;
        const title = app.querySelectorAll('ion-title');
        expect(title.length).toEqual(1);
        expect(title[0].innerText).toEqual(environment.appName);
    });
});
//# sourceMappingURL=menubar.component.spec.js.map