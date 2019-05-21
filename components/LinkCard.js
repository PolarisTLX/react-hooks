import React, {Fragment} from 'react';

// new way to make compoenent does not require classes since React 16.8.1 / hooks

const LinkCard = props => {

  const linkImageStyle = {
      backgroundImage: 'url(\'http://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png\')'
  }

  return(
    <Fragment>
      <div className="linkCard">
        <div className="linkCardImage" style={linkImageStyle}>
        </div>
        <div className="linkCardLink">
          <h2><a href="#">My Link</a></h2>
        </div>
      </div>
    </Fragment>
  )
}

export default LinkCard
