import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss']
})
export class ListingCardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  gotoProfile() : void{
    this.router.navigate(["details"])
  }

}
