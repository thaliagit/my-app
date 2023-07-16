import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LanguageContext } from './components/LanguageContext';
import DisplayLanguage from './components/DisplayLanguage';
import HookCounter from './components/HookCounter';
import LoginForm from './components/LoginForm';

class App extends React.Component {

  // state = {
  //   language: "en"
  // }

  // handleLanguageChange = (event) => {
  //   this.setState({
  //     language: event.target.value
  //   })
  // }
  
  render(){
  return (
    <> 
    {/* <select value={this.state.language} onChange={this.handleLanguageChange}>
      <option value="en">English</option>
      <option value="gr">Greek</option>
    </select>
      <LanguageContext.Provider value={this.state.language}>
        <DisplayLanguage />
      </LanguageContext.Provider> */}
      <HookCounter/>
      {/* <LoginForm /> */}
    </>
  );
  }
}

export default App;
