import React from 'react';

import './style.css';

import RayImage from '../../assets/k-ray.svg';

const Home = () => {
  return (
    <div className="container" data-testid="home-component">
      <div className="template-block">
        <div>
          <h3>React App Template</h3>
          <ul>
            <li>Eslint - prettier</li>
            <li>Parcel (2.7.0)</li>
          </ul>
        </div>
        <img src={RayImage} alt="k-ray" />
      </div>
    </div>
  );
};

export default Home;
