import { Component, OnInit } from '@angular/core';
import { Message, UserType } from './bot-app.model';

@Component({
  selector: 'app-bot-pop-up',
  templateUrl: './bot-pop-up.component.html',
  styleUrls: ['./bot-pop-up.component.css','../../assets/icomoon/style.css']
})
export class BotPopUpComponent implements OnInit {

  switchChathead: boolean = false;

  inputTextMsg: String;

  message: Message;

  constructor() { }

  ngOnInit(): void {
  }

  openChathead(){
    this.switchChathead = true;
  }

  closeChathead(){
    this.switchChathead = false;
  }

  fetchReply(){
    if(this.inputTextMsg){
      this.message = {
        User : UserType.User,
        MessageText: this.inputTextMsg
      }
      this.inputTextMsg = null;
    }
  }

}
