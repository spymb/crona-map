import React from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart1';

export const Home = () => {
  return (
    <div>
      <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
          <section className="section1">
            <Chart1/>
          </section>
          <section className="bordered section2">2</section>
          <section className="bordered section3">3</section>
          <section className="bordered section4">4</section>
          <section className="bordered section5">5</section>
        </main>
      </div>
    </div>
  );
};
