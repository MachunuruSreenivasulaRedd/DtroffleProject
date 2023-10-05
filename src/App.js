import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
        </Switch>
      </div>
    )
  }
}

export default App
