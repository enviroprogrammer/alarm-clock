import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  now: Date = new Date(); 

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
