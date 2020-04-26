import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap-notify';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }
  showNotification(from, align,type,message){
   

     

      $['notify']({
          icon: "notifications",
          message: message

      },{
          type: type,
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          
      });
  }
  ngOnInit() {
  }

}
