import React from 'react';

export const Chart1 = () => {
  return (
    <div className="summary bordered">
      <h2>数据汇总</h2>
      <table>
        <thead>
        <tr>
          <th>新增确诊</th>
          <th>新增本土</th>
          <th>新增境外</th>
          <th>新增无症状</th>
        </tr>
        <tr>
          <td className='f11'>28,973</td>
          <td className='f12'>1,411</td>
          <td className='f13'>14</td>
          <td className='f14'>9,372</td>
        </tr>
        </thead>

        <thead>
        <tr>
          <th>现有确诊</th>
          <th>现有本土</th>
          <th>现有境外</th>
          <th>现有无症状</th>
        </tr>
        <tr>
          <td className='f21'>389,568</td>
          <td className='f22'>26,403</td>
          <td className='f23'>164</td>
          <td className='f24'>191,036</td>
        </tr>
        </thead>

        <thead>
        <tr>
          <th>累积确诊</th>
          <th>累积境外</th>
          <th>累积治愈</th>
          <th>累计死亡</th>
        </tr>
        <tr className='lastTr'>
          <td>
            <div className='f31'>66,230</div>
            <span>较昨日+18,285</span>
          </td>
          <td>
            <div className='f32'>18,177</div>
            <span>较昨日+16</span>
          </td>
          <td>
            <div className='f33'>257,477</div>
            <span>较昨日+4,349</span>
          </td>
          <td>
            <div className='f34'>15,185</div>
            <span>较昨日+28</span>
          </td>
        </tr>
        </thead>
      </table>
    </div>
  );
};