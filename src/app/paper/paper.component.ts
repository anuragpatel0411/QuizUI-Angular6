import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ModalDirective } from './../../../node_modules/ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { OrgPageComponent } from './../org-page/org-page.component';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  isQuestionShow: boolean = false;
  isAnswerShow: boolean = false;
  rightAnswer: number = 0;
  totalAnswer: number = 0;
  paper: any;
  @ViewChild('questionTest') questionTest : any;
  @ViewChild('submitModal') submitModal: ModalDirective;
  @ViewChild('answerModal') answerModal : ModalDirective;
    
  constructor(private http: HttpClient,
    private orgPage: OrgPageComponent) { }

  ngOnInit() {
    this.http.get('./../../assets/'+ this.orgPage.route + '/' + this.orgPage.paperCat + '.json')
      .subscribe((paper) => {
        this.paper = paper;
      })
    console.log(this.paper);
  }

  HomePage() {
    this.isQuestionShow = false;
    this.isAnswerShow = false;
	}

  submitTest(){
    this.rightAnswer= 0;
    this.totalAnswer= 0;
    for( let i=0; i<this.paper.paperQuestions.length; i++){
      if("selected" in this.paper.paperQuestions[i] && (this.paper.paperQuestions[i]["selected"] !=null)){
        this.totalAnswer++;
        if(this.paper.paperQuestions[i]["selected"] == this.paper.paperQuestions[i]["answer"]){
          this.rightAnswer++;
        }
      }
    }
    this.submitModal.show();
  }

  checkAnswers(){
    this.submitModal.hide();
    this.isQuestionShow = true;
    this.isAnswerShow = true;

	}

}
