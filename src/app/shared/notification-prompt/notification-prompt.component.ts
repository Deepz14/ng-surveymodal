import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification-prompt',
  templateUrl: './notification-prompt.component.html',
  styleUrls: ['./notification-prompt.component.css']
})
export class NotificationPromptComponent {

  private _title: string = '';
  private _message: string = '';
  @Output() closeModal = new EventEmitter<boolean>();

  @Input('title')
  set title(title: string) {
    if(title){
      this._title = title
    }
  }

  @Input('message')
  set message(message: string){
    if(message){
      this._message = message
    }
  }

  get title(){ return this._title}

  get message() {return this._message};

  onClose(){
    this.closeModal.emit(true);
  }

}
