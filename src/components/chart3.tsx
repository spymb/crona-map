import React, {useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import loop from '../shared/loop-animate';

export const Chart3 = () => {
  const divRef = useRef(null);
  const options = {
    tooltip: {
      show: true,
      trigger: 'axis',
      transitionDuration: 0,
      formatter: `日期: {b}<br/>总新增确诊: {c}例`,
      textStyle: {
        fontSize: 10,
      },
      borderColor: '#ff745f',
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
      boundaryGap: true,
      data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '4.10', '4.11', '4.12', '4.13', '4.14', '4.15',
        '4.16', '4.17', '4.18', '4.19', '4.20', '4.21', '4.22', '4.23', '4.24', '4.25', '4.26', '4.27', '4.28', '4.29', '4.30',],
      splitLine: {show: true, lineStyle: {color: '#1e393d'}},
      axisTick: {show: false},
      axisLine: {show: false},
      axisLabel: {
        textStyle: {fontSize: 9}
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {lineStyle: {color: '#1e393d'}},
      axisLabel: {
        textStyle: {fontSize: 9}
      }
    },
    series: [
      {
        type: 'line',
        data: [14288, 8570, 2163, 1954, 2263, 2097, 3096, 2114, 2049, 2009, 2070, 2250, 4009, 4547, 5451, 4944, 4305, 5186, 4582,
          5616, 5309, 7030, 23314, 8923, 7259, 8251, 10561, 18157, 13842, 16121]
      },
    ].map(obj => ({
      ...obj,
      symbol: 'circle',
      symbolSize: px(0),
      lineStyle: {width: px(2), color: '#ff745f'},
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#ff745f'
        }, {
          offset: 1,
          color: '#1e393d'
        }]),
      }
    }))
  };

  loop(divRef, options);

  return (
    <div className="bordered qushi">
      <h2>近30天总新增确诊趋势</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};