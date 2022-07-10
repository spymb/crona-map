import React, {useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import loop from '../shared/loop-animate';

export const Chart9 = () => {
  const divRef = useRef(null);
  const options = {
    color: '#8d70f8',
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [0, 18, 28, 38, 48, 58, 68, 78],
      splitLine: {show: true, lineStyle: {color: '#1e393d'}},
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel:{
        textStyle: {fontSize: 8}
      }
    },

    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#1e393d'}},
      axisLabel: {
        textStyle: {fontSize: 8},
        formatter(val) {
          return val * 100 + '%';
        }
      },
    },
    series: [{
      type: 'line',
      data: [
        0.19, 0.20, 0.26,
        0.35, 0.26, 0.20,
        0.08, 0.06
      ],
      symbol: 'circle',
      symbolSize: px(5),
      lineStyle: {width: px(2)},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#8d70f8'
        }, {
          offset: 1,
          color: '#1e393d'
        }]),
      }
    }]
  }

  loop(divRef, options)

  return (
    <div className="年龄段-图3">
      <h3>确诊年龄趋势图</h3>
      <div ref={divRef} className="chart">
      </div>
    </div>
  );
};