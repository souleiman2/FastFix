import { Component, OnInit } from '@angular/core';
import { PORT_CARDS } from 'src/app/Interface/typesWorker';

@Component({
  selector: 'app-choose-type-seller',
  templateUrl: './choose-type-seller.component.html',
  styleUrls: ['./choose-type-seller.component.scss']
})
export class ChooseTypeSellerComponent implements OnInit {

  readonly cards = PORT_CARDS;
  clicked : Array<boolean> = Array(this.cards.length).fill(false);

  constructor() { }

  ngOnInit(): void {
  }

  select(index : number) : void{
    this.clicked[index] = !this.clicked[index];
  }

}
