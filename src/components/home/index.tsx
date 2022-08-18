import React from 'react';

import RayImage from '../../assets/k-ray.svg';
import './style.css';

const Home = () => {
  return (
    <div className="container" data-testid="home-component">
      <div className="template-block">
        <div>
          <h3>React App Template</h3>
          <ul>
            <li>React (18.2.0)</li>
            <li>Redux Toolkit (1.8.4)</li>
            <li>Parcel (2.7.0)</li>
            <li>Storybook (6.5.10)</li>
            <li>Eslint - prettier</li>
          </ul>
        </div>
        <img src={RayImage} alt="k-ray" />
      </div>
    </div>
  );
};

export default Home;
