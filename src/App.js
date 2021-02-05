import React from 'react'
import Navigation from './components/navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/login'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Post from './pages/post'
import EditPost from './pages/edit-post'


function App() {
  const user = {
    firstName: 'Calvin',
    lastName: 'Tang'
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/Page1' component={Page1} />
          <Route path='/Page2' component={Page2} />
          <Route path='/Page3' component={Page3} />
          <Route path="/Page4" component={Page4} />
          <Route path="/post/:id" component={Post} />
          <Route path="/edit-post" component={EditPost} />
          <Route path='/' component={Home} />
          <Route component={() => 404}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
