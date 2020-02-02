import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wykres',
  templateUrl: './wykres.component.html',
  styleUrls: ['./wykres.component.less']
})
export class WykresComponent implements OnInit {
  public baroptions = {
    scaleShowVerticalLIne: false,
    responsive: true
  };
    public barLabes = ['Day 1', 'Day 2' ,'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8' , 'Day 9', 'Day 10', 'Day 11', 'Day 12'];
    public barlegend = true ;
    public barType = 'bar';
    public barchart = [
      {data: [1900,2800,4600, 6000, 7750, 9745, 11820,14380 ] , label: 'Zarazenia potwierdzone'},
      {data: [56, 80, 106, 130, 170, 213, 259] , label: 'Deaths'},
      {data: [25, 780] , label: 'Wyleczenia'}
    ];

    public baroptions1 = {
      scaleShowVerticalLIne: false,
      responsive: true
    };
      public barLabes1 = ['Ile razy wypadła liczba'];
      public barlegend1 = true ;
      public barType1 = 'bar';
      public barchart1 = [
        {data: [50 ] , label: 'Liczba 1'},
        {data: [206] , label: 'Liczba 2'},
        {data: [100] , label: 'Liczba 3'},
        {data: [50 ] , label: 'Liczba 4'},
        {data: [206] , label: 'Liczba 5'},
        {data: [100] , label: 'Liczba 6'},
      ];

  constructor() { }

  ngOnInit() {
  }

}
