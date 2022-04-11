import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.info}
        </a>
      </header>
    </div>
  );
}

function Header(props){
  return (
    <header class="header">
      <link rel="stylesheet" href="https://cdn.w3cbus.com/library/mdui/1.0.2/css/mdui.min.css"/>
        <a href="/">
          <img src="./imgs/logo.jpg" alt="" />
        </a>
        <div class="mdui-container">
          <div class="mdui-tab mdui-tab-centered" mdui-tab>
              <a href="/">
                  <div class={props.index==="1"?"mdui-ripple":"mdui-ripple:after"}>HOME</div>
              </a>
              <a href="/about">
                  <div class={props.index==="2"?"mdui-ripple":"mdui-ripple:after"}>ABOUT</div>
              </a>
          </div>
        </div>
    </header>
  )
}

function Home() {
    return (
      <div class="sc-hiEfMO eHELh">
        <Header index="1"/>
        <div class="sc-hiEfMO eHELg">
          <App url="https://reactjs.org" info="Learn React"/>
        </div>
      </div>
    )
}

function About() {
    return (
      <div class="sc-hiEfMO eHELh">
        <Header index="2"/>
        <div class="sc-hiEfMO eHELg">
          <App  url="https://zh-hans.reactjs.org/docs/getting-started.html" info="About React"/>
        </div>
      </div>
    )
}


export {Home, About}; 