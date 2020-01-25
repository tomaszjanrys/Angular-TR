import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.less']
})
export class ProblemsComponent implements OnInit {
  dane: string;
  wynik: string;

  constructor() { }

  ngOnInit() {
  }

  sumuj() {
    this.wynik = this.dane;
  }
}
