import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter } from 'rxjs/operators';
import { Observable, Subscriber } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http: HttpClient) { }
  listDetail: any;
  ngOnInit() {
    this.http.get('./../../assets/feedback.json').subscribe((response) => {
      this.listDetail = response;
      console.log(this.listDetail);
    })
  }
  productJSON={"aa":"anurag", "bb":"patel"};
  add(){
    //   this.http.post('./../../assets/feedback.json', this.productJSON);
    //   // .map(res => this.listDetail);
    // console.log("hurray");
  

}}
