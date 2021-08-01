import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {

      for (const keyName in data) {
        if (data.hasOwnProperty(keyName)) {
          this.items.push(data[keyName]);
        }
      }
    });
  }

  isCollapsed = false;

  url = `https://b8aksu8890.execute-api.sa-east-1.amazonaws.com/default/bdoLambdaFunction?nit=800220154`;
  items = [];
  // tslint:disable-next-line: typedef
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;

  }

}
