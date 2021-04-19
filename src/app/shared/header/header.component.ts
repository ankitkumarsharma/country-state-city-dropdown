import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tabData:any;
  tabSubData:any;
  currentUser:any;
  constructor(private _route: Router, private _store: Store<any>) {
    
   }

  ngOnInit(): void {
    
  }
}
