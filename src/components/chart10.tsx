import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart10 = () => {
  const divRef = useRef(null);

  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions({
      tooltip: {
        show: true,
        trigger: 'item',
        transitionDuration: 0,
        formatter: `{b}<br/>确诊人数: {c}`,
        textStyle: {
          fontSize: 10,
        },
        borderWidth: 2,
        confine: true,
        position: function (point: any[]) {
          return [point[0], '30%'];
        }
      },
      xAxis: {show: false},
      yAxis: {show: false},
      visualMap: {
        type: 'piecewise', // 类型为分段型
        bottom:40,
        right: 2,
        splitNumber: 6,
        seriesIndex: [0],
        itemWidth: 15, // 每个图元的宽度
        itemHeight: 10,
        itemGap: 2,    // 每两个图元之间的间隔距离，单位为px
        pieces: [      // 自定义每一段的范围，以及每一段的文字
          { gte: 10000, label: '10000以上', color: '#b80909' },
          { gte: 1000, lte: 9999, label: '1000-9999', color: '#e64546' },
          { gte: 100, lte: 999, label: '100-999', color: '#f57567' },
          { gte: 10, lte: 99, label: '10-99', color: '#ff9985' },
          { gte: 1, lte: 9, label: '1-9', color: '#ffe5db' },
          { gte: 0, lte: 0, label: '0', color: 'white' },
        ],
        textStyle: {
          color: 'white',
          fontSize: 9,
        }
      },
      series: [
        {
          data: [
            {"name": "台湾省","value": 136195},
            {"name": "河北省", "value": 13},
            {"name": "山西省", "value": 27},
            {"name": "内蒙古自治区", "value": 60},
            {"name": "辽宁省", "value": 40},
            {"name": "吉林省", "value": 884},
            {"name": "黑龙江省", "value": 230},
            {"name": "江苏省", "value": 30},
            {"name": "浙江省", "value": 586},
            {"name": "安徽省", "value": 7},
            {"name": "福建省", "value": 50},
            {"name": "江西省", "value": 220},
            {"name": "山东省", "value": 70},
            {"name": "河南省", "value": 36},
            {"name": "湖北省", "value": 4},
            {"name": "湖南省", "value": 26},
            {"name": "广东省", "value": 169},
            {"name": "广西壮族自治区", "value": 23},
            {"name": "海南省", "value": 16},
            {"name": "四川省", "value": 74},
            {"name": "贵州省", "value": 0},
            {"name": "云南省", "value": 27},
            {"name": "西藏自治区", "value": 0},
            {"name": "陕西省", "value": 1},
            {"name": "甘肃省", "value": 0},
            {"name": "青海省", "value": 20},
            {"name": "宁夏回族自治区", "value": 0},
            {"name": "新疆维吾尔自治区", "value": 8},
            {"name": "北京市", "value": 391},
            {"name": "天津市", "value": 2},
            {"name": "上海市", "value": 12988},
            {"name": "重庆市", "value": 5},
            {"name": "香港特别行政区", "value": 261716},
            {"name": "澳门特别行政区", "value": 0},
          ],
          type: 'map',
          mapType: 'CN',
          showLegendSymbol: false,
          zoom: 1.2,
          center: [104, 35],
          itemStyle: {
            borderColor: '#376c78',
            emphasis: {
              label: {color: 'white'},
              areaColor: '#ffc851',
            },
          },
        },
      ],
    }));
  }, []);

  return (
    <div className="bordered map">
      <h2>疫情地图</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart"/>

        <div className="ring">
          <div className="radar"/>
        </div>

        <div className="left-notes">数据实时监控中</div>
        <div className="notes">注: 部分岛屿未展示</div>
      </div>
    </div>
  );
};