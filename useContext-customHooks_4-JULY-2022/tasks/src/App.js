import Home from './components/Home';
import { ThemeContext } from './components/ThemeContext';
import React from 'react';

class App extends React.Component {
  state = {
    color: 'blue',
  }

  changeColorHandler = (changeColor) => {
    this.setState({ color: changeColor })
  }

  render() {


    return (
      <div>
      <ThemeContext.Provider value={{ state: this.state, changeColorHandler: this.changeColorHandler }}>

        <Home />
      </ThemeContext.Provider>
        </div>
    );
  }
}

export default App;