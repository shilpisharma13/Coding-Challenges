import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Residents from './pages/Residents'
import Error from './pages/Error'
import SharedLayout from './components/SharedLayout'
import SingleResident from './pages/SingleResident'
import AddResident from './pages/AddResident'
import SingleProgram from './pages/SingleProgram'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='programs' element={<Programs />} />
          <Route path='programs/:programID' element={<SingleProgram />} />
          <Route path='residents' element={<Residents />} />
          <Route path='addResident' element={<AddResident />} />
          <Route path='residents/:residentID' element={<SingleResident />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
