import React from 'react';
import './App.scss';
import QuestionContainer from './components/QuestionContainer/QuestionContainer';
import Title from './components/Title/Title';

function App() {

  return (
    <div className="app">
      <Title />
      <QuestionContainer />
    </div>
  );
}

export default App;
