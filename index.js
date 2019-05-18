import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

// class App extends Component
// Hooks have been created to remove the need for classes!!!
// the entire app can be made with functions!!

const App = () => {
  return(
    <Fragment>
      <nav className="navigation">
        <a><img src="http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"/></a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src="http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png"/>
          <form>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label for="linkTitle" className="formLabel">Enter a name for your bookmark</label>
            </div>
            <div>

            </div>
            <button></button>
          </form>
        </div>
        <div className="rightContent">

        </div>
      </main>
    </Fragment>
    <div>
      <h1>Hello World from Hooks!</h1>
    </div>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
