import React from 'react'
import { Provider } from 'react-redux'
import Container from './components/Container'

import { createStore } from 'redux'
import reducer from './redux/reducers'

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
          <Container />
      </Provider>
    )
  }
}

export default App
