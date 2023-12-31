import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  constructor(private sharedService:SharedService){
    this.getFinalScore();
  }
  sectionOneScore:number=0;
  sectionTwoScore:number=0;
  sectionThreeScore:number=0;
  sectionFourScore:number=0;
  finalScore:number=0;
  // comments:string ="";

  section1Guidelines:string[] = [];
  section2Guidelines:string[] = [];
  section3Guidelines:string[] = [];
  section4Guidelines:string[] = [];

  getFinalScore(){
    this.sectionOneScore = this.sharedService.section1Score;
    this.sectionTwoScore = this.sharedService.section2Score;
    this.sectionThreeScore = this.sharedService.section3Score;
    this.sectionFourScore = this.sharedService.section4Score;

    this.section1Guidelines = this.sharedService.section1Guidelines;
    this.section2Guidelines = this.sharedService.section2Guidelines;
    this.section3Guidelines = this.sharedService.section3Guidelines;
    this.section4Guidelines = this.sharedService.section4Guidelines;

  
    this.finalScore = this.sectionOneScore+this.sectionTwoScore+this.sectionThreeScore+this.sectionFourScore;

    // if(this.finalScore == 0){
    //   this.comments = "Please go through the guidelines, and retake the test";
    // }else if(this.finalScore == 60){
    //   this.comments = "Great work! Your expertise in software security is commendable."
    // }else if(this.finalScore == 30){
    //   this.comments = "Good effort, but there's room for improvement. Consider retaking the test."
    // }else if(this.finalScore>0 && this.finalScore<30){
    //   this.comments = "Your score indicates some areas of concern. Focus on key concepts and retake the test.";
    // }else if(this.finalScore>30 && this.finalScore<60){
    //   this.comments = "You're on the right track, but there's still room for improvement. Keep studying and consider a retake.";
    // }
  }
}
