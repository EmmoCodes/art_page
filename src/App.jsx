import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home/Home.jsx'
import Navbar from './components/shared/Navbar/Navbar.jsx'
import ArtList from './components/pages/ArtList/ArtList.jsx'
import ArtDetails from './components/pages/ArtDetails/ArtDetails.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/artwork'} element={<ArtList />} />
        <Route path={'/details/:id'} element={<ArtDetails />} />
      </Routes>
    </>
  )
}

export default App
