import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BarangPage from './pages/BarangPage'
import JenisPage from './pages/JenisPage'
import UpdateJenisPage from './pages/UpdateJenisPage'
import UpdateBarang from './pages/UpdateBarang'
import ShowPage from './pages/ShowPage'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/barang" element={<BarangPage />} />
          <Route path="/jenis" element={<JenisPage />} />
          <Route path="/jenis/:id/update" element={<UpdateJenisPage />} />
          <Route path="/barang/:id/update" element={<UpdateBarang />} />
          <Route path="/barang/:id/" element={<ShowPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
