import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wykres',
  templateUrl: './wykres.component.html',
  styleUrls: ['./wykres.component.less']
})
export class WykresComponent implements OnInit {
  public baroptions = {
    scaleShowVerticalLIne: false,
    responsive: true};
    public barLabes = ['a', '3'];
    public barlegend = true ;
    public barType = 'bar';
    public barchart = [
      {data: [3, 4] , label: 'a'},
      {data: [4, 42] , label: 'a'}
    ];



  constructor() { }

  ngOnInit() {
  }

}
