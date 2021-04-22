import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {SERVER_API_URL} from '../../app.constants';

@Injectable() export class WebsocketService {

  private serverUrl = `${SERVER_API_URL}socket`;
  private stompClient;
  public mapEndpointSubscription: Map<string, any> = new Map();

  public async initWebSocket() {
    return new Promise((resolve) => {
      if (!this.stompClient) {
        const ws = new SockJS(this.serverUrl);
        this.stompClient = Stomp.over(ws);
        this.stompClient.connect({}, resolve);
    } else {
      resolve();
    }
})

public async subscribe(name: string, fnc: (event) => void) {
  const subscription = this.stompClient.subscribe(`/${name}`, (event) => {
     fnc({...event, body: JSON.parse(event.body)})
  });
  this.mapEndpointSubscription.set(name, subscription);
}



public unsubscribeToWebSocketEvent(name: string) {
  const subscription = this.mapEndpointSubscription.get(name);
  if (subscription) {
    subscription.unsubscribe();
}
}


public send(name: string, body: any) {
  this.stompClient.send(`/app/socket/${name}`, {}, JSON.stringify(body));
}
public disconnect() {
  if (this.stompClient !== null) {
    this.stompClient.disconnect();
}
}
  }