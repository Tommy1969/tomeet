import React from 'react'
import {EventContainer} from './containers/event'
import {RecoilRoot} from "recoil"
import RecoilLogger from 'recoil-logger'

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RecoilLogger />
        <EventContainer />
      </RecoilRoot>
    </React.StrictMode>
  )
}

export default App;
