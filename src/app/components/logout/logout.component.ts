/*_{ path: 'logout', component: LogoutComponent }, _

_~~~_

This is our component to log out of the site, and it's just a simple class to clean out the `localStorage`.
Let's create it under the`components/login` folder with the name of`logout.component.ts`:

~~~ts*/

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Helpers } from '../../helpers/helpers';

@Component({

  selector: 'app-logout',

  template: '<ng-content></ng-content>'

})

export class LogoutComponent implements OnInit {

  constructor(private router: Router, private helpers: Helpers) { }

  ngOnInit() {

    this.helpers.logout();

    this.router.navigate(['/login']);

  }

}
