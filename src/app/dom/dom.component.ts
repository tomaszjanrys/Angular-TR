import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.less']
})
export class DomComponent implements OnInit {
  constructor() { }
  imie = '';
  liczbax = 11;
  data = [{
    name : 'tomek',
    nazwisko : 'Rys',
  }, {
    name: 'Natalia',
    nazwisko: 'Ryś',
  }, {
    name: 'Hania',
    nazwisko: 'Zdebel'
  },{
    name: 'Donald',
    nazwisko: 'Trup'
  },{
    name: 'Jacek',
    nazwisko: 'Duda'
  }];
  zmiana = false;
  zmiana2 = false;



liczenie = () => {
  this.liczbax = this.liczbax + 1;
  if (this.liczbax > 10) {
this.zmiana = true;
  } else {
    this.zmiana = false;
  }

}
liczeniex = () => {
  this.liczbax = this.liczbax - 1;
  if (this.liczbax < 0) {
    this.zmiana2 = true;
      } else {
      if (this.liczbax >= 0 ) {
this.zmiana2 = false;
      }}

}


  ngOnInit() {
  }

}
