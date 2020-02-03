import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-wykres',
  templateUrl: './wykres.component.html',
  styleUrls: ['./wykres.component.less']
})
export class WykresComponent implements OnInit {

czart = [];
czartdwa = [];
  public baroptions = {
    scaleShowVerticalLIne: true,
    responsive: true,

  };
    public barLabes = ['Day 1', 'Day 2' ,'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8' , "3 luty 2020", 'Day 10', 'Day 11', 'Day 12'];
    public barlegend = true ;
    public barType = 'bar';
    public barchart = [
      {data: [1900,2800,4600, 6000, 7750, 9745, 11820,14380, 17205  ] , label: 'Zarazenia potwierdzone'},
      {data: [56, 80, 106, 130, 170, 213, 259, 0 ,361] , label: 'Deaths'},
      {data: [25, 0,0,0,0,0,0,0,475] , label: 'Wyleczenia'},
      {data: [25, 0,0,0,0,0,0,0,21500,] , label: 'Podejrzenia'}
    ];

    public baroptions1 = {
      scaleShowVerticalLIne: false,
      responsive: true
    };
      public barLabes1 = ['Ile razy wypadła liczba' , 'zmiena'];
      public barlegend1 = true ;
      public barType1 = 'bar';
      public barchart1 = [
        {data: [222] , label: 'Liczba 1', borderColor: ['black']},
        {data: [206] , label: 'Liczba 2'},
        {data: [100] , label: 'Liczba 3'},
        {data: [50 ] , label: 'Liczba 4'},
        {data: [206] , label: 'Liczba 5'},
        {data: [100] , label: 'Liczba 6'},
      ];

  constructor() { }

  ngOnInit() {
    this.czart[''] = new Chart('canvas', {
      type: 'line',
      data: {labels: ['Ocena 6', 'Ocena 5', 'Ocena 4', 'Ocena 3', 'Ocena 2', 'Ocena 1'],
      datasets:[{
        label:'kasa',
        data:[13,18,14,13,3,2],
        lineTension: 0.4 ,
        backgroundColor:['rgb(146, 199, 0, 1)'],
        borderColor:'rgb(8, 31, 245)',
        borderWidth:4
      }]

    },
    options:{
      title:{
        text:"Ilosc ocen Natalia ",
        display:true,
        fontColor: 'red'
      },
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:false
          }
        }]
      }
    }
    });
  }

  private f() {


  }

}
