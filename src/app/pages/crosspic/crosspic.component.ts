import {Component, OnInit} from '@angular/core';
import {SystemService} from "../../shared/system.service";

@Component({
  selector: 'app-crosspic',
  templateUrl: './crosspic.component.html',
  styleUrls: ['./crosspic.component.less']
})
export class CrosspicComponent implements OnInit {

  hintData = {row: [], col: []};

  missionData = {
    option: {
      size: 50,
      row: 5,
      col: 5
    },
    data: [
      [
        {fill: true, color: 'black'},
        {fill: false, color: 'white'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'}
      ],
      [
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: false, color: 'white'},
        {fill: true, color: 'black'},
        {fill: false, color: 'white'}
      ],
      [
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'}
      ],
      [
        {fill: false, color: 'white'},
        {fill: false, color: 'white'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: false, color: 'white'}
      ],
      [
        {fill: false, color: 'white'},
        {fill: false, color: 'white'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'},
        {fill: true, color: 'black'}
      ]
    ]
  };

  constructor(private systemService: SystemService) {
  }

  ngOnInit() {
    this.systemService.headerBtns.next(Object.assign([], [{
      text: 'new', callback: () => {
        console.log(this.hintData);
      }
    }, {
      text: 'clear', callback: () => {
        console.log(this.hintData);
      }
    }]));
    this.hintData = this.initHintData();
  }

  initHintData() {
    let hintData = {row: [], col: []};
    for (let i = 0; i < this.missionData.option.row; i++) {
      hintData.row[i] = [];
      let temp = 0;
      for (let j = 0; j < this.missionData.option.col; j++) {
        if (this.missionData.data[i][j].fill) {
          temp++;
        } else {
          if (temp !== 0) {
            hintData.row[i].push(temp);
            temp = 0;
          }
        }
      }
      if (temp !== 0) {
        hintData.row[i].push(temp);
      }
    }
    for (let i = 0; i < this.missionData.option.col; i++) {
      hintData.col[i] = [];
      let temp = 0;
      for (let j = 0; j < this.missionData.option.row; j++) {
        if (this.missionData.data[j][i].fill) {
          temp++;
        } else {
          if (temp !== 0) {
            hintData.col[i].push(temp);
            temp = 0;
          }
        }
      }
      if (temp !== 0) {
        hintData.col[i].push(temp);
      }
    }
    return hintData;
  }

}
