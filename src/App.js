import React from 'react'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Topbar from './components/Topbar'

function App() {
  return (
    <div>
      <title>ChatGPT</title>
      <div class="flex flex-row"><Sidebar/>
     
        <div class="flex flex-col">
          <div class = "w-[1300px]"><Topbar/></div>
          <div><Body/></div>
        </div>
      </div>
    </div>
  )
}

export default App