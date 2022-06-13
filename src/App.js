import React from 'react';

import Header from './components/Header';
import Courses from './components/Courses';
import Recommendation from './components/Recommendation';
import WorkShop from './components/WorkShop';
import MotivationLetter from './components/MotivationLetter';
import Passion from './components/Passion';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Courses_items from './components/Courses_items';

import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Courses />
      <Courses_items />
      <Recommendation />
      <WorkShop />
      <MotivationLetter /> 
      <Passion />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
