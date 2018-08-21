import { Component } from '@angular/core';


@Component({
  selector: 'ngx-pages',
  template: `
     <ngx-header></ngx-header>
     <main role="main">
     <router-outlet></router-outlet>
     </main>
     <ngx-footer></ngx-footer>
  `,
})
export class PagesComponent {

}
