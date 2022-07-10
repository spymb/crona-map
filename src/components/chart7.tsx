import React, {useRef} from 'react';
import {px} from '../shared/px';
import loop from '../shared/loop-animate';

export const Chart7 = () => {
  const divRef = useRef(null);
  const options = {
    color: ['#F46064', '#33A4FA'],
    xAxis: {show: false},
    yAxis: {show: false},
    legend: {show: false},
    series: [
      {
        type: 'pie',
        radius: ['75%', '90%'],
        avoidLabelOverlap: false,
        label: {
          show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
          formatter(options) {
            return options.value * 100 + '%';
          }
        },
        labelLine: {show: false},
        itemStyle: {
          borderColor: '#0F113A',
          borderWidth: px(4)
        },
        data: [
          {value: 0.46, name: '女'},
          {value: 0.54, name: '男'},
        ]
      }
    ]
  }

  loop(divRef, options)

  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">性别</div>
      </div>
      <div className="legend">
        <span className="male"/>男
        <span className="female"/>女
      </div>
    </div>
  );
};