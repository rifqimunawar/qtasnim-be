import { Link, useParams } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'
import { useEffect, useState } from 'react'
import { getJenisBarang, getShowBarang } from '../api'
import RecomendComponent from '../components/RecomendComponent'

export default function ShowPage() {
  const { id } = useParams()

  const [showBarang, setShowBarang] = useState({})
  const [allJenis, setAllJenis] = useState([])

  useEffect(() => {
    async function fetchShowBarang() {
      try {
        const jenisResponse = await getJenisBarang()
        const responseShow = await getShowBarang(id)
        setAllJenis(jenisResponse)
        setShowBarang(responseShow)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchShowBarang()
  }, [id])

  const getJenisName = (jenisId) => {
    const jenis = allJenis.find((data) => data.id === Number(jenisId))
    return jenis ? jenis.jenis : 'Jenis Tidak Ditemukan'
  }

  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-1/2">
            <div className="overflow-x-auto">
              <table className="table p-3 bg-sky-400">
                {/* head */}
                <tbody>
                  <tr className="">
                    <td>Nama Barang</td>
                    <td>{showBarang.nama}</td>
                  </tr>
                  <tr className="">
                    <td>Stok Barang</td>
                    <td>{showBarang.stok}</td>
                  </tr>
                  <tr className="">
                    <td>Jumlah Terjual</td>
                    <td>{showBarang.jumlah_terjual}</td>
                  </tr>
                  <tr className="">
                    <td>Tanggal Transaksi</td>
                    <td>{showBarang.tanggal_transaksi}</td>
                  </tr>
                  <tr className="">
                    <td>Jenis Barang</td>
                    <td>
                      {allJenis.length > 0
                        ? getJenisName(showBarang.jenis_barang_id)
                        : 'loading...'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-9">
              <Link to={'/barang'} className="btn btn-warning btn-sm">
                Kembali
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <RecomendComponent idJenis={showBarang.jenis_barang_id} />
          </div>
        </div>
      </div>
    </div>
  )
}
