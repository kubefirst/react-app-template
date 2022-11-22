import React from 'react';

import { Container, Ray, Template } from './home.styled';

const Home = () => {
  return (
    <Container data-testid="home-component">
      <Template className="template-block">
        <Ray alt="k-ray" src="/static/k-ray-light.png" height="250" width="250" />
        <div>
          <h3>Kubefirst React Template</h3>
          <ul>
            <li>NextJS (13.0.2)</li>
            <li>React (18.2.0)</li>
            <li>Redux Toolkit (1.8.4)</li>
            <li>Parcel (2.7.0)</li>
            <li>Storybook (6.5.10)</li>
            <li>Eslint - prettier</li>
            <li>Typescript</li>
          </ul>
        </div>
      </Template>
    </Container>
  );
};

export default Home;
