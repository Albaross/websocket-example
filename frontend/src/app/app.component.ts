import { Component, OnInit } from '@angular/core';
declare var SockJS: any;
declare var Stomp: any;

const HOST: string = "localhost";
const PORT: number = 8080;
const ENDPOINT: string = "/endpoint";
const SEND_TO: string = "/app/hello";
const SUBSCRIBE_TO: string = "/topic/reply";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private stompClient: any;
  private connected: boolean = false;

  private title: string = 'app';
  private status: string = 'not connected!';

  ngOnInit() {
    let socket = new SockJS('http://' + HOST + ':' + PORT + ENDPOINT);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame) => {
      this.connected = true;
      console.log('Connected: ' + frame);
      
      this.stompClient.subscribe(SUBSCRIBE_TO, (input) => {
        let message = JSON.parse(input.body);
        this.status = message.content;
      });

      this.stompClient.send(SEND_TO, {}, JSON.stringify({'content': 'hello'}));
    });
  }

}
