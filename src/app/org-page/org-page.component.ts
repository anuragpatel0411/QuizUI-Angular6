import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeComponent } from './../home/home.component';
import { PaperComponent } from '../paper/paper.component';

@Component({
  selector: 'app-org-page',
  templateUrl: './org-page.component.html',
  styleUrls: ['./org-page.component.css']
})
export class OrgPageComponent implements OnInit {

  constructor(private http: HttpClient, 
    private homeComponent: HomeComponent) { }

  categorie: any;
  route: string= this.homeComponent.org;
  paperCat: string;
    
  ngOnInit() {
    this.http.get('./../../assets/'+ this.route +'/main.json')
      .subscribe((list) => {
        this.categorie = list;
      })
    console.log(this.categorie);
  }

}
