import React from 'react';
import Button from '@material-ui/core/Button';

class Upvote extends React.Component {

constructor(props) {
 super(props)
 this.state = {
  vote: 0
 }
}
increment = () => {
  this.setState({
    vote: this.state.vote + 1
  })
}

decrement = () => {
  this.setState({
    vote: this.state.vote - 1
  })
}

 render() {
   return (
     <div>
       <Button variant="contained" color="primary" onClick={this.increment}>
        +
       </Button>
       <p>{this.state.vote}</p>
       <Button variant="contained" color="secondary" onClick={this.decrement}>
        -
       </Button>

     </div>
   )
 }
}
export default Upvote;