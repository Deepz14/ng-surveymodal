import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-survey-modal',
  templateUrl: './survey-modal.component.html',
  styleUrls: ['./survey-modal.component.css']
})
export class SurveyModalComponent implements OnInit{

  constructor(private fb: FormBuilder) {}
  surveyForm: any;

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      customerName: [''],
      ratings: [''],
      comments: [''],
      reviews: this.fb.array([])
    });
    this.setReviews();
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

}
