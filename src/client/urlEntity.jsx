import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';

class UrlEntity extends React.Component {
  render() {
    return (
      <div>
      {this.props.tweets.entities.url}
      </div>
    );
  }
}



export default UrlEntity;

console.log("tweet react");
