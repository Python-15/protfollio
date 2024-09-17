
import './App.css'
import Portfolio from './home/home'
import {Sidebar}  from './home/aboutSection/aboutSection'
import { HashRouter } from 'react-router-dom'

function App() {

  

  return (
    <div className='left_pannel_container'>
      <div className='about_section_container'>
  <HashRouter><Sidebar/></HashRouter>


</div>
      <div className='header_section'>
     <Portfolio/>
     </div>

    </div>
  )
}

export default App
