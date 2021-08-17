import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <BrowserRouter>
          <Header>
            <Switch>
              
            </Switch>
          </Header>
        </BrowserRouter>
      </>
    );
  }
}
 
export default App;
