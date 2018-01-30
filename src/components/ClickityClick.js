// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasBeenClicked: false
    };
  }

  handleClick = (e) => {

    switch(this.state.hasBeenClicked) {
      case true:
        this.setState({
          hasBeenClicked: false
        }, ()=> console.log(this.state.hasBeenClicked))
        break;
      case false:
        this.setState({
          hasBeenClicked: true
        }, ()=> console.log(this.state.hasBeenClicked))
        break;
    }

  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Plz Click Me Thank U</button>
      </div>
    )
  }

}

export default ClickityClick;
