import React from 'react';
import ReactDom from 'react-dom';

// class App extends Component
// Hooks have been created to remove the need for classes!!!
// the entire app can be made with functions!!

const App = () => {
  return(
    <div>
      <h1>Hello World from Hooks!</h1>
    </div>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
