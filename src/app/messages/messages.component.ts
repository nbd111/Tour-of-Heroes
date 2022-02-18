import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
// Message service must be public because we are going to bind it to a template.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
