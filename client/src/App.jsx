import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import SignIn from './pages/signIn'
import About from './pages/about'
import Profile from './pages/profile'
import Header from './components/Header'
import SignUp from './pages/signUp'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<PrivateRoutes/>}>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App