import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets';

class Tweet extends React.Component {
  render() {
    return (
      <div>
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
