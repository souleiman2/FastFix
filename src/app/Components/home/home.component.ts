import { Component, OnInit } from '@angular/core';
import { PORT_CARDS } from 'src/app/Interface/typesWorker';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    readonly cards = PORT_CARDS;
    constructor() { }
    
    ngOnInit(): void {
    }
}
