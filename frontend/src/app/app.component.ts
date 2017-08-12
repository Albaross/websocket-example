import { Component, OnInit } from '@angular/core';
declare var SockJS: any;
declare var Stomp: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title: string = 'app';
  private status: string = 'not connected!';

  ngOnInit() {

  }
  
}
