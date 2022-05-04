import React from 'react';
import './home.scss';
import {Chart2} from '../components/chart2';
import {Chart1} from '../components/chart1';
import {Chart10} from '../components/chart10';
import {Chart7} from '../components/chart7';
import {Chart8} from '../components/chart8';
import {Chart9} from '../components/chart9';
import {Chart3} from '../components/chart3';
import {Chart4} from '../components/chart4';
import {Chart5} from '../components/chart5';
import {Chart6} from '../components/chart6';
import {Clock} from '../components/clock';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div className="home">
      <header>
        <Clock/>
        <span>新冠疫情监控平台</span>
        <div className="info">
          数据更新至2022.4.30
        </div>
      </header>
      <main>
        <section className="section3">
          <Chart1/>
          <Chart2/>
          <Chart3/>
        </section>
        <section className="section4">
          <Chart10/>
          <div className="bordered 年龄段">
            <h2>确诊人员年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 xinzeng">
            <h2>昨日本土新增省市TOP10</h2>
            <div className="charts">
              <Chart4/>
            </div>
          </div>
          <div className="bordered row2 leiji">
            <h2>境外输入累计确诊省TOP10</h2>
            <div className="charts">
              <Chart5/>
            </div>
          </div>
          <div className="bordered row3 fengxian">
            <h2>各省市中高风险地区占比</h2>
            <Chart6/>
          </div>
        </section>
      </main>
      <footer>
        &copy; SPYM {year}
      </footer>
    </div>
  );
};