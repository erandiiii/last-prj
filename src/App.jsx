import Nav from './Nav'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Products from './pages/Products'
import Footer from './components/Footer'
import { Route, Router, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' Component={Home} />
        <Route path='/Blog' Component={Blog} />
        <Route path='/About' Component={About} />
        <Route path='/Products' Component={Products} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
