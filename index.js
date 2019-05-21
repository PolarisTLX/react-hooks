import React, { Fragment, useState } from 'react';
import ReactDom from 'react-dom';
import LinkCard from './components/LinkCard';

import './main.css'

// class App extends Component
// Hooks have been created to remove the need for classes!!!
// the entire app can be made with functions!!


const App = () => {

  // New for React Hooks:
  const [cardData, setCardData] = useState([{ linkName: 'my link', linkHref: 'https://github.com' }]);

  const [newCard, setNewCard] = useState({ linkName: '', linkHref: '' })

  const dispatchCardSet = (payload) => {
    let oldArray = cardData; // this is grabbing values from line 13
    // new value:  all oldArray + new payload/new stuff
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    // reset the setNewCard so the imputs are empty again:  ..not doing a difference?
    setNewCard({linkHref: '', linkName: ''})
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
          <form onSubmit={e => e.preventDEfault()}>
            <h2 className="formTitle">Add a bookmark</h2>
            <div>
              <label htmlFor="linkTitle" className="formLabel">Enter a name for your bookmark</label>
              <input
                // old way:
                // value={this.state.something}
                // new way with hooks:
                value={newCard.linkName}
                onChange={e => setNewCard({...newCard, linkName: e.currentTarget.value})}
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 characters max"
              />
            </div>
            <div>
              <label htmlFor="linkHref" className="formLabel">Enter the link for your bookmark</label>
              <input
                value={newCard.linkHref}
                // onChange={e => setNewCard({...cuddentValueOfNewCard, attributeToBeChanged})}
                // pass setNewCard with the entire object, and update just one attribute, done with destructuring with '...'
                onChange={e => setNewCard({...newCard, linkHref: e.currentTarget.value})}
                type="text"
                name="linkHref"
                minLength="7"
                placeholder="https://example.com"
              />
            </div>
            <button onClick={() => dispatchCardSet(newCard)}>Add</button>
          </form>
        </div>
        <div className="rightContent">
          { /* <div className="linkCard">
                  <div className="linkCardImage" style={linkImageStyle}>

                  </div>
                  <div className="linkCardLink">
                    <h2><a href="#">My Link</a></h2>
                  </div>
                </div> */ }
          <LinkCard/>
        </div>
      </main>
    </Fragment>
  )
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
