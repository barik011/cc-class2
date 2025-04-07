import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'barique';

  isLogin:boolean=false;

  uerList:any[]=[
    {
      id:1,
      name:'Rahman'
    },
    {
      id:2,
      name:'Rahim'
    },
    {
      id:3,
      name:'Karim'
    }
  ];

  grade:string='';

  todayDate=new Date();

  currency:number=14530.7532;

  num:number=.532;
}
