import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  gotoProfile() : void{
    this.router.navigate(["profile"])
  }

}
