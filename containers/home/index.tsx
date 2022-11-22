import React, { useEffect } from 'react';

import { setUser } from '../../redux/slices/user.slice';
import HomeComponent from '../../components/home/index';
import { useAppDispatch } from '../../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUser({ name: 'test', lastName: 'test' }));
  }, [dispatch]);

  return <HomeComponent />;
};

export default Home;
