import React, {useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import loop from '../shared/loop-animate';

export const Chart2 = () => {
  const divRef = useRef(null);
  const options = {
    tooltip: {
      show: true,
      trigger: 'axis',
      transitionDuration: 0,
      formatter: `<div>日期: {b}</div>
                    <div>新增境外输入: {c}例</div>`,
      textStyle: {
        fontSize: 10,
      },
      borderColor: '#ffc851',
      borderWidth: 2,
      confine: true,
      position: function (point: any[]) {
        return [point[0], '30%'];
      }
    },
    grid: {
      x: px(0),
      x2: px(8),
      y: px(8),
      y2: px(14),
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6','4.7','4.8','4.9','4.10','4.11','4.12','4.13','4.14','4.15',
        '4.16','4.17','4.18','4.19','4.20','4.21','4.22','4.23','4.24','4.25','4.26','4.27','4.28','4.29','4.30',],
      boundaryGap: true,
      splitLine: {show: true, lineStyle: {color: '#1e393d'}},
      axisTick: {show: false},
      axisLine: {show: true},
      axisLabel:{
        textStyle: {fontSize: 9}
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#1e393d'}},
      axisLabel:{
        textStyle: {fontSize: 9}
      }
    },
    series: [
      {
        type: 'line',
        data: [43, 51, 39, 62,32,39,36,16,33,20,21,13,21,14,29,25,19,19,8,11,14,17,14,14,15,6,9,13,14,4]
      }
    ].map(obj => ({
      ...obj,
      symbol: 'circle',
      symbolSize: px(0),
      lineStyle: {width: px(2), color: '#ffc851'},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#ffc851'
        }, {
          offset: 1,
          color: '#1e393d'
        }]),
      }
    }))
  }

  loop(divRef, options)

  return (
    <div className="bordered qushi">
      <h2>近30天新增境外输入趋势</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};