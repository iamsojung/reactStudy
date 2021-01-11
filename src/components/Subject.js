import React, { Component } from 'react';

//기존의 pure.html의 header부분을 바꾸고 싶은 것임 
class Subject extends Component { 
    render() { 
      return ( 
        <header>        
          <h1>{this.props.title}</h1>
          {this.props.sub}
        </header>
      );
    }
  }
  export default Subject;