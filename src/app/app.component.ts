import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message :string;
  ngOnInit() {
 this.appService.getIndex().subscribe(x=>{
   this.message=x.json()
  });
  }


constructor(private appService : AppService) {

  
}

  title = 'app work2s!';
}
