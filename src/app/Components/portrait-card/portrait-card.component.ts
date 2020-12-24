import { Component, Input, OnInit } from '@angular/core';
import { PortCard } from 'src/app/Interface/port-card';

@Component({
  selector: 'app-portrait-card',
  templateUrl: './portrait-card.component.html',
  styleUrls: ['./portrait-card.component.scss']
})
export class PortraitCardComponent implements OnInit {
  @Input() card: PortCard;
  constructor() { }

  ngOnInit(): void {
  }

}
