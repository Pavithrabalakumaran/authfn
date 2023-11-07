import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route exact path="/not-found" component={NotFound} />
    <Route component={NotFound} />
  </Switch>
)

export default App
