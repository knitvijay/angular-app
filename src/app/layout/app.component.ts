import { Component, AfterViewInit } from '@angular/core';
import { Subscription, pipe } from 'rxjs';
import { Helpers } from '../helpers/helpers';
import { delay } from 'q';
import { startWith } from 'rxjs/operators';
import { MessageService } from '../helpers/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  subscription: Subscription;

  authentication: boolean;
  title = 'Angular 7 Seed';
  constructor(private helpers: Helpers, private messageService: MessageService) {

  }

  ngAfterViewInit() {

    this.subscription = this.messageService.getMessage().subscribe(message => {
       this.authentication = message;
      });



  }

  OnDestroy() {

    this.subscription.unsubscribe();

  }

}
