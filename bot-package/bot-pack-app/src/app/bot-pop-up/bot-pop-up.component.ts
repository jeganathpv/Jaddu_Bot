import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot-pop-up',
  templateUrl: './bot-pop-up.component.html',
  styleUrls: ['./bot-pop-up.component.css']
})
export class BotPopUpComponent implements OnInit {

  switchChathead: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openChathead(){
    this.switchChathead = true;
  }

  closeChathead(){
    this.switchChathead = false;
  }

}
