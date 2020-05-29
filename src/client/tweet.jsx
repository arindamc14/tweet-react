import React from 'react';
import ReactDOM from 'react-dom';
import User from 'user.jsx';
import Entities from 'entities.jsx';
import UrlEntity from 'UrlEntity.jsx';

import tweets from 'tweets';

class Tweet extends React.Component {
  render() {
    return (
      <div>
      Tweet works
		  <User/>
			  <Entities>
			    <UrlEntity/>
			  </Entities>
      </div>
    );
  }
}



export default Tweet;

console.log("tweet react");
