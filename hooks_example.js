// old way of making react component:

class OldWayComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Paul',
      surname: 'Rail'
    }
  }

  componenentWillMount() {
    this.setState({surname: 'Aurora'})
  }

  componentDidUpdate() {

  }
}




// new way using React Hooks
// don't use classes anymore

import React, {Fragment, useState} from 'react';  // NEW  "useState"

const App = () => {
  // instead within out app:

  const [variable of the state that will hole some initial value, the method to update the variable of the state] = useState(initial state of the variable)

  // Exmaple:
  const [cardDate, setCardDate] = useState([{ linkName: 'my link', linkHref: 'https://github.com' }])

}


// Array example to explain array destructuring above?:
const myArray = [1, 2, 3];

const [one, two, three] = myArray;

//result:
console.log(one); //1

const [state, setState] = useState(1);
//returns: [1, setState/somefunction]
