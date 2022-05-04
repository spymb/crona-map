import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart4 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      tooltip: {
        show: true,
        trigger: 'item',
        transitionDuration: 0,
        formatter: `地区: {b}<br/>累积输入人数: {c}`,
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
        data: ['上海', '北京', '广东', '吉林', '四川', '山东', '江西', '河南', '黑龙江', '新疆'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#1e393d'}
        },
        axisLabel: {
          interval: '0',
          fontSize: '10',
        },
      },

      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#1e393d'}
        },
        axisLabel: {
          textStyle: {fontSize: 10}
        }
      },
      series: [{
        type: 'bar',
        data: [788, 53, 21, 16, 6, 6, 5, 5, 5, 4],
        itemStyle: {
          normal:{
            color:function(params){
              if(params.value >= 788){
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
    }));
  }, []);

  return (
    <div ref={divRef} className="chart">
    </div>
  );
};