
import './App.css'
import Headers from './Headers'
import FirstBlock from './FirstBlock'
import SecondBlock from './SecondBlock'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <Headers/>
      <FirstBlock />
      <SecondBlock/>
      <Footer name='Grace'/>
    </div>
  )
}

export default App
