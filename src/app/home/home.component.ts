import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listDetail: object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('./../../assets/all.json').subscribe((response) => {
        this.listDetail = response;
        console.log(this.listDetail);
      })
  }
}
