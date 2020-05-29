import React from 'react';
import ReactDOM from 'react-dom';
import UrlEntity from 'UrlEntity.jsx';


import tweets from 'tweets';

class Entities extends React.Component {
  render() {
    return (
      <div>
      Entities work
	     <UrlEntity/>
      </div>
    );
  }
}


export default Entities;

console.log("tweet react");
