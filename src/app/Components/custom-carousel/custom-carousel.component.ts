import { Component, Input, OnInit } from '@angular/core';
import { PortCard } from 'src/app/Interface/port-card';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {

  @Input() allData: Array<PortCard>;

  initData: Array<PortCard>;
  segregatedData: Array<Array<PortCard>>;

  sepData(nbPerSet: number = 4) {
    const nbSet = Math.ceil(this.allData.length / nbPerSet);
    let temp = [];
    for (let i = 0; i < nbSet; i++) {
      temp.push(this.allData.slice(i * nbPerSet, (i + 1) * nbPerSet));
    }
    return [temp[0], temp.slice(1, temp.length)];
  }

  ngOnInit() {
    [this.initData, this.segregatedData] = this.sepData();
    console.log(this.initData);
    console.log(this.segregatedData);
  }
}
