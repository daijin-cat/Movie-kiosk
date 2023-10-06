import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './screens/MainPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={MainPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
