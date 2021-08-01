import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  url = `https://b8aksu8890.execute-api.sa-east-1.amazonaws.com/default/bdoLambdaFunction?nit=800220154`;
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.items.push(data[key]);
        }
      }
    });
  }

}
