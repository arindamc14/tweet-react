import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from 'tweet.jsx';
import User from 'user.jsx';
import Entities from 'entities.jsx';
import UrlEntity from 'UrlEntity.jsx';

import tweets from 'tweets';

class App extends React.Component {
  render() {
    return (
      <div>
      Index works
        <Tweet>
		  <User/>
			<Entities>
			<UrlEntity/>
			</Entities>
		</Tweet>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );

console.log("index react");
