
import './App.css'
import  { Home } from './pages/Home'
import  { Sobre } from './pages/Sobre'
import { SobreIgor } from './pages/SobreIgor'
import { SobrePietro } from './pages/SobrePietro'
import { Route, Routes  } from 'react-router-dom';

function App() {
  
  return (
    <div className='py-4'>
      <header>
        <h1>Título do site </h1>
      </header>
      <hr />
      <div className="py-4">
        <Routes>
           <Route path='/' element={ <Home/>}/>
           <Route path='/sobre' element={ <Sobre/>}/>
           <Route path='/sobre/igor' element={ <SobreIgor/>}/>
           <Route path='/sobre/pietro' element={ <SobrePietro/>} />
        </Routes>
      </div>
       <hr />
       <footer>
          todos os direitos reservados.
       </footer>
    </div>


  )
}

export default App
