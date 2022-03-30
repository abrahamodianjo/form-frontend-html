'use strict';

const e = React.createElement;
 //this is the component 
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
  <button className="btn btn-primary" onClick={() => this.setState({ liked: true })}>
    Like
  </button>
);
  }
}
 // this renders the component specified 

const domContainer = document.querySelector('#abraham_stuff');ReactDOM.render(e(LikeButton), domContainer);