import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Nav from './components/Nav';

let postDate = [
  {
    author: 'Michelle',
    date: 'Sunday, September 7th',
    body: 'Sunday brunch was delicious!'
  },
  {
    author: 'Samantha',
    date: 'Sunday, September 7th',
    body: 'I had an amazing time in Chelan!'
  }
]

class App extends Component {
  state = {
      post: postDate
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Nav />
            <br></br>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" render={() => <Blog post={this.state.post}/>}/>
            <Route path="/projects" component={Projects}/>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
