import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart1';
import {Chart2} from '../components/chart2';
import {Chart3} from '../components/chart3';
import {Chart4} from '../components/chart4';

export const Home = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
          <section className="section1">
            <Chart1/>
            <Chart2/>
          </section>
          <section className="bordered section2">
            <Chart3/>
            <Chart4/>
          </section>
          <section className="bordered section3">3</section>
          <section className="bordered section4">4</section>
          <section className="bordered section5">5</section>
        </main>
        <footer>
          &copy; SPYM {year}
        </footer>
      </div>
    </div>
  );
};
