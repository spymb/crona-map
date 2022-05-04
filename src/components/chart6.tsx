import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart6 = () => {
  const divRef = useRef(null);
  const data = [
    {value: 0.31, name: '黑龙江'},
    {value: 0.27, name: '北京'},
    {value: 0.13, name: '上海'},
    {value: 0.05, name: '辽宁'},
    {value: 0.05, name: '湖南'},
    {value: 0.04, name: '江苏'},
    {value: 0.04, name: '山东'},
    {value: 0.04, name: '内蒙古'},
    {value: 0.03, name: '吉林'},
    {value: 0.02, name: '河南'},
    {value: 0.02, name: '河北'},
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      tooltip: {
        show: true,
        trigger: 'item',
        transitionDuration: 0,
        borderWidth: 2,
        formatter: function (params) {
          if (params.name === '北京') {
            return `
                    <div style="display:flex;align-items:center;">
                       <span style="display:inline-block;margin-right:3px;border-radius:12px;width:6px;height:6px;
                       background-color:${params.color};"></span>
                          ${params.name}
                    </div>
                    <div>高风险地区: 2个</div>
                    <div>中风险地区: 29个</div>
                    `
          } else if (params.name === '黑龙江') {
            return `
                    <div style="display:flex;align-items:center;">
                       <span style="display:inline-block;margin-right:3px;border-radius:12px;width:6px;height:6px;
                       background-color:${params.color};"></span>
                          ${params.name}
                    </div>
                    <div>高风险地区: 6个</div>
                    <div>中风险地区: 21个</div>
                    `
          } else {
            return `
                    <div style="display:flex;align-items:center;">
                       <span style="display:inline-block;margin-right:3px;border-radius:12px;width:6px;height:6px;
                       background-color:${params.color};"></span>
                          ${params.name}
                    </div>
                    <div>中风险地区: ${params.percent}个</div>
                    `
          }
        },
        textStyle: {
          fontSize: 10,
        },
        confine: true,
        position: function (point: any[]) {
          return [point[0], '30%'];
        }
      },
      xAxis: {show: false},
      yAxis: {show: false},
      grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
      legend: {
        orient: 'vertical',
        left:60,
        top: 'center',
        textStyle: {color: 'white', fontSize: 10},
        itemGap: 6,
        itemWidth: px(10),
        itemHeight: px(10),
        formatter(name) {
          const value = data.find(i => i.name === name)?.value * 100 + '%';
          return name + ' ' + value;
        }
      },
      color: ['#45C2E0', '#C1EBDD', '#FFC851', '#5A5476', '#1869A0',
        '#FF9393', '#f95eae', '#f8731f', '#7c2e98', '#5bb755', '#7771d0'],
      series: [
        {
          center: ['62%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ],
    }));
  }, []);

  return (
    <div ref={divRef} className="chart">
    </div>
  );
};