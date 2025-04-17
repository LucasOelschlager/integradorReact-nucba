import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/layout'
import { Home } from './routes/Home'
import { Nosotros } from './routes/Nosotros'
import { Contacto } from './routes/Contacto'
import { Login } from './routes/Login'
import { UserProvider } from './context/userContext'
function App() {
  return (
    <UserProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout >
    </UserProvider>
  )
}

export default App
