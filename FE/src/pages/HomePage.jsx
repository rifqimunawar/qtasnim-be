import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="font-semibold text-xl">
          Selamat Datang di Test Tugas Coding <br />
          PT Qtasnim Digital Teknologi <br />
          <span className="font-normal">Oleh : Rifqi Munawar Ridwan</span>
        </h1>
        <Link to="/barang" className="btn btn-primary btn-sm mt-4">
          Lanjutkan
        </Link>
      </div>
    </div>
  )
}
