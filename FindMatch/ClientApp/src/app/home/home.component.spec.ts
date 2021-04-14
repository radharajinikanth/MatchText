import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { } from 'jasmine';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [FormsModule, ReactiveFormsModule, HttpClientModule]
        }).compileComponents();   
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('should display a title', async(() => {
        let fixture: ComponentFixture<HomeComponent>;
        const titleText = fixture.nativeElement.querySelector('h1').textContent;
        expect(titleText).toEqual('Find Text Match');
    }));    

    it('should click the Find Match Button to get the position of the subtext in the text',async(() => {        
        
        let buttonElement = fixture.debugElement.query(By.css('.btn btn-primary'));
        let outPut = fixture.nativeElement.querySelector('p');

        //arrange
        const text = 'SOME text to find match';
        const subText = 'e';

        //act
        component.form.controls.text.value(text);
        component.form.controls.text.value(subText);
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        //assert
        fixture.whenStable().then(() => {
            expect(outPut.textContect).toBe('4,7');
        });
    }));

    it('should return empty string if subtext is not in the text', async(() => {

        let buttonElement = fixture.debugElement.query(By.css('.btn btn-primary'));
        let outPut = fixture.nativeElement.querySelector('p');

        //arrange
        const text = 'SOME text to find match';
        const subText = 'u';

        //act
        component.form.controls.text.value(text);
        component.form.controls.text.value(subText);
        buttonElement.triggerEventHandler('click', null);
        fixture.detectChanges();

        //assert
        fixture.whenStable().then(() => {
            expect(outPut.textContect).toBe('');
        });
    })); 
});

