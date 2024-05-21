# create Hero skeleton
src/components/Hero.js

export default function Hero(props) {
  return (
    <>
      Hero component here
    </>
  )
}

# create Home.js
# src/pages/Home.js

import Hero from '../components/Hero'
import React from 'react'

export default function Home(props) {

  return (
    <>
      <Hero />
    </>
  )
}


# add routes to App.js
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  let history = useHistory()
  return (
    <BrowserRouter history={history}>
      <Navbar />
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />
      </Switch>
      <Cookie />
      <Footer />
    </BrowserRouter>
  );
}