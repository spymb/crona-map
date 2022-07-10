import React, {useEffect} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from './create-echarts-options';

const loop = (ref: React.MutableRefObject<any>, options) => {
  useEffect(() => {
    const myChart = echarts.init(ref.current);
    const render = () => {
      myChart.setOption(createEchartsOptions(options));
    }

    render()

    setInterval(() => {
      myChart.clear()
      render()
    }, 2500)

  }, []);
}


export default loop