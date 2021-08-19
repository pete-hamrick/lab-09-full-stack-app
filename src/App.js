import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateDisc from './CreateDisc';
import DiscDetail from './DiscDetail';
import DiscList from './DiscList';
import Header from './Header';
import './App.css'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <section>
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path ='/' component={DiscList} />
              <Route exact path ='/discs/:id' component={DiscDetail} />
              <Route exact path ='/create' component={CreateDisc} />
            </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
 
export default App;
