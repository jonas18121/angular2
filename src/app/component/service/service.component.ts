import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Rot13Service } from '../../service/rot13/rot13.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  private title: Title;
  private rot13: Rot13Service;
  encrypted: string;
  message: string;

  constructor(title: Title, rot13: Rot13Service){ 
    this.title = title;
    this.rot13 = rot13;
  }

  /*c'est pareil
   constructor(private title: Title){}
  */

  ngOnInit(): void {
    this.title.setTitle('Les services | Formation Angular 9');
  }

  public crypter(): void {
    this.encrypted = this.rot13.transform(this.message);
  }

}
