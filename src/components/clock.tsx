import React, {useEffect} from 'react';

export const Clock = () => {
  useEffect(() => {
    const clock = document.querySelector('.clock');
    const timer = document.createElement('div');
    const dater = document.createElement('div');
    clock.appendChild(timer);
    clock.appendChild(dater);

    const step = () => {
      setTimeout(() => {
        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
        const day = time.getDay();
        const monthMap = {
          1: '1月',
          2: '2月',
          3: '3月',
          4: '4月',
          5: '5月',
          6: '6月',
          7: '7月',
          8: '8月',
          9: '9月',
          10: '10月',
          11: '11月',
          12: '12月'
        };
        const dayMap = {
          1: '周一',
          2: '周二',
          3: '周三',
          4: '周四',
          5: '周五',
          6: '周六',
          0: '周日'
        };

        minute < 10
          ? second < 10
            ? (timer.innerHTML = hour + ':0' + minute + ':0' + second)
            : (timer.innerHTML = hour + ':0' + minute + ':' + second)
          : second < 10
            ? (timer.innerHTML = hour + ':' + minute + ':0' + second)
            : (timer.innerHTML = hour + ':' + minute + ':' + second);
        dater.innerHTML = year+ '年' + monthMap[month] + date + '日' + ', ' + dayMap[day];

        step();

      }, 1000);
    };

    step();

  }, []);

  return (
    <div className="clock"/>
  );
};