import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Subject, BehaviorSubject } from 'rxjs';
import { MessageService } from './message';
@Injectable()

export class Helpers {

    private authenticationChanged = new Subject<boolean>();

    constructor(private messageService: MessageService) { }

    public isAuthenticated(): boolean {

        return (!(window.localStorage['token'] === undefined ||

            window.localStorage['token'] === null ||

            window.localStorage['token'] === 'null' ||

            window.localStorage['token'] === 'undefined' ||

            window.localStorage['token'] === ''));

    }

    public isAuthenticationChanged(): Observable<any> {

       // return this.authenticationChanged.next(this.isAuthenticated());

         return this.authenticationChanged.asObservable();

    }

    sendMessage(): void {
        // send message to subscribers via observable subject
        this.messageService.sendMessage(this.isAuthenticated());
    }

    public getToken(): any {

        if (window.localStorage['token'] === undefined ||

            window.localStorage['token'] === null ||

            window.localStorage['token'] === 'null' ||

            window.localStorage['token'] === 'undefined' ||

            window.localStorage['token'] === '') {

            return '';

        }

        const obj = JSON.parse(window.localStorage['token']);

        return obj.token;

    }

    public setToken(data: any): void {

        this.setStorageToken(JSON.stringify(data));

    }

    public failToken(): void {

        this.setStorageToken(undefined);

    }

    public logout(): void {

        this.setStorageToken(undefined);

    }

    private setStorageToken(value: any): void {

        window.localStorage['token'] = value;
        this.messageService.sendMessage(this.isAuthenticated());
       // this.authenticationChanged.next(this.isAuthenticated());

    }

}
