import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { Home } from './routes/Home'
import { Nosotros } from './routes/Nosotros'
import { Contacto } from './routes/Contacto'
function App() {
  return (
    <>
      <Layout >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </Layout >
    </>
  )
}

export default App
