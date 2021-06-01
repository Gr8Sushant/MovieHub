import React, {Component} from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import Reports from './pages/Reports';
import Contact from './pages/Contact';
import Search from './pages/Search';
import Oscars from './pages/Oscars';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Desctiption from './components/Descriptions/Description';


class App extends Component { 

  constructor(props){
    super(props);
  }


render(){
  return(
    <BrowserRouter>
      <Header/>
      <Navigation/>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/movies" component = {Movies}/>
          <Route path="/reports" component = {Reports}/>
          <Route path="/oscars2020" component = {Oscars}/>
          <Route path="/contact" component = {Contact}/>
          <Route path="/search" component = {Search}/>
          <Route path="/:postId" exact component={Desctiption} />
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}
}



export default App;
