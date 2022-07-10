import React, {useRef} from 'react';
import loop from '../shared/loop-animate';

export const Chart5 = () => {
  const divRef = useRef(null);
  const options = {
    tooltip: {
      show: true,
      trigger: 'item',
      transitionDuration: 0,
      formatter: `地区: {b}<br/>累积确诊人数: {c}`,
      textStyle: {
        fontSize: 10,
      },
      borderWidth: 2,
      confine: true,
      position: function (point: any[]) {
        return [point[0], '30%'];
      }
    },
    xAxis: {
      data: ['上海', '广东', '云南','四川','福建','广西','北京','天津','浙江','陕西'],
      axisTick: {show: false},
      axisLine: {
        lineStyle: {color: '#1e393d'}
      },
      axisLabel: {
        interval: '0',
        fontSize: '10',
      }
    },

    yAxis: {
      splitLine: {show: false},
      axisLine: {
        show: true,
        lineStyle: {color: '#1e393d'}
      },
      axisLabel:{
        textStyle: {fontSize: 10}
      }
    },
    series: [{
      type: 'bar',
      data: [4583, 3838, 1489, 1309, 964, 951, 709,614,593,483],
      itemStyle: {
        normal:{
          color:function(params){
            if(params.value >= 3830){
              return "#df3f30";
            }
            return "#f29d60";
          }
        },
        emphasis: {
          color: '#f9d774',
        },
      }
    }]
  }

  loop(divRef, options)

  return (
    <div ref={divRef} className="chart"/>
  );
};