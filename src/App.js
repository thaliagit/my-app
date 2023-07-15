import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { LanguageContext } from './components/LanguageContext';
import DisplayLanguage from './components/DisplayLanguage';

function App () {

  // state = {
  //   language: "en"
  // }

  // handleLanguageChange = (event) => {
  //   this.setState({
  //     language: event.target.value
  //   })
  // }
  const [language, setLanguage] = useState('en')

  function handleChangeLanguage(event){
    setLanguage(event.target.value)
  }
  
  return (
    <> 
    <select value={language} onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="gr">Greek</option>
    </select>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />
      </LanguageContext.Provider>
    </>
  );
  
}

export default App;
