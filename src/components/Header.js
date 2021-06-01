import React, { Component} from 'react';
import Searchbar from './Searchbar';

export default class Header extends Component {

  constructor(props){
    super(props);
  }


render(){
  return(
    
        <>
          <header className="headline">
           <p >MOVIE<span><i className="fa fa-play-circle" ></i></span>HUB</p><Searchbar/>
          </header>   
        </>
        
    
  );
}
}
