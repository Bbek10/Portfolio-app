import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import IntroCard from './components/IntroCard/IntroCard';
import Projects from './components/Project/Projects';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="portfolio-main">
      <Container style={{width:900}}>
      <Header/>
     <IntroCard/>
     <Projects/>
      </Container>
    
    </div>
  );
}

export default App;
