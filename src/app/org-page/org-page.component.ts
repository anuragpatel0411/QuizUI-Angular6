import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-org-page',
  templateUrl: './org-page.component.html',
  styleUrls: ['./org-page.component.css']
})
export class OrgPageComponent implements OnInit {
  url: string;
  constructor(private http: HttpClient, private route: ActivatedRoute) { 
      route.params.subscribe(params => { this.url = params['organisation'];});
  }

  categorie: any;
    
  ngOnInit() {
    this.http.get('./../../assets/'+ this.url +'/main.json')
      .subscribe((list) => {
        this.categorie = list;
        console.log(this.categorie);
      })
  }

}
