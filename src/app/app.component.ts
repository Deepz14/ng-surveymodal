import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  showSurveyModal: boolean = true;
  showNotificationModal: boolean = false;
  notificationTitle: string = '';
  notificationMessage: string = '';

  closeSurveyModal() { 
    this.notificationTitle = 'Thank you!';
    this.notificationMessage = 'Your feedback has been sent.';
    this.showSurveyModal = false;
    this.showNotificationModal = true;
  }

  closeNotificationModal() {
    this.showNotificationModal = false;
    this.showSurveyModal = true;
  }

}
