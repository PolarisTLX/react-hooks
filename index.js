import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './main.css'

// class App extends Component
// Hooks have been created to remove the need for classes!!!
// the entire app can be made with functions!!


const App = () => {

  const linkImageStyle = {
      backgroundImage: 'url(\'http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png\')'
  }

  return(
    <Fragment>
      <nav className="navigation">
        <a><img src="http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png" height="40px"/></a>
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
              <input
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 characters max"
              />
            </div>
            <div>
              <label for="linkHref" className="formLabel">Enter the link for your bookmark</label>
              <input
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com"
              />
            </div>
            <button>Add</button>
          </form>
        </div>
        <div className="rightContent">
          <div className="linkCard">
            <div className="linkCardImage" style={linkImageStyle}>

            </div>
            <div className="linkCardLink">
              <h2><a href="#">My Link</a></h2>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
