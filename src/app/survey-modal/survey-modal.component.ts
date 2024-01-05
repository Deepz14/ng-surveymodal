import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { first, map, of } from 'rxjs';

@Component({
  selector: 'app-survey-modal',
  templateUrl: './survey-modal.component.html',
  styleUrls: ['./survey-modal.component.css']
})
export class SurveyModalComponent implements OnInit{

  @Output() closeSurvey = new EventEmitter<boolean>();
  surveyForm: any;
  starArr = [false,false,false,false,false];
  constructor(private fb: FormBuilder) {}
  

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      customerName: [''],
      ratings: [''],
      comments: [''],
      reviews: this.fb.array([])
    });
    this.setReviews();
  }

  over(evt:any){
    evt.target.innerText = "★";
  }

  out(evt:any){
    evt.target.innerText = "☆";
  }

  onStarSelected(rating: any){
    this.starArr = this.starArr.map((star, index) => {
      star = (index <= rating) ? true : false;
      return star;
    });
  }

  setReviews(){
    const reviewOptions = ["I'm satisfied with the content availability in the Platform", "I'm satisfied with the features of the Platform", "I'm satisfied with the quality of the data and analysis in the Platform", "I'm satisfied with the data visualization in the Platform", "I'm satisfied with the Platform's response speed" ]
    this.addReview(reviewOptions)
  }

  getReviews() {
    return this.surveyForm.controls['reviews'].value;
  }

  addReview(reviews: string[]) {
    let reviewArray = this.surveyForm.controls['reviews'] as FormArray;
    reviews.forEach((review) => {
      reviewArray.push(this.fb.group({
        desc: [review],
        option: ['6']
      }))
    })
  }

  submitSurvey(){
    console.log("survey data: ", this.surveyForm.getRawValue());
    this.closeSurvey.emit(true);
  }

}
