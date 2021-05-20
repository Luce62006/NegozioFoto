import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: { name: string; } | undefined;

  constructor() {
    setTimeout(() =>{
      this.user = {
        name: 'Alex'
      };
      }, 2000);
    }


  ngOnInit(): void {
  }

}
