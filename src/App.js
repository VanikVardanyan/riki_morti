import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CharactersWrapper from './components/CharactersWrapper';
import Header from './components/Header';
import Loader from './components/Loader';
import { fetchCharaters } from './store/thunkAction/fetchCharacters';

import './style.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCharaters())
  },[dispatch])

  return (
    <>
      <Header />
      <CharactersWrapper />
      <Loader />
    </>
  );
};

export default App;
