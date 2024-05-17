import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getJenisBarang, urlMaster } from '../api'
import NavbarComponent from '../components/NavbarComponent'

export default function UpdateBarang() {
  const [dataBarang, setDataBarang] = useState({
    nama: '',
    stok: '',
    jumlah_terjual: '',
    tanggal_transaksi: '',
    jenis_barang_id: '',
  })

  const { id } = useParams()
  const [allJenis, setAllJenis] = useState([])
  const navigate = useNavigate()
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch jenis barang
        const jenisResponse = await getJenisBarang()
        setAllJenis(jenisResponse)

        // Fetch data barang by ID
        const barangResponse = await axios.get(`${urlMaster}/api/barang/${id}`)
        setDataBarang(barangResponse.data.barang)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [id])

  const handleChange = (e) => {
    const value = e.target.value
    setDataBarang({
      ...dataBarang,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newData = {
      _method: 'PUT',
      nama: dataBarang.nama,
      stok: dataBarang.stok,
      jumlah_terjual: dataBarang.jumlah_terjual,
      tanggal_transaksi: dataBarang.tanggal_transaksi,
      jenis_barang_id: dataBarang.jenis_barang_id,
    }
    console.log(newData)
    try {
      const response = await axios.post(
        `${urlMaster}/api/barang/${id}/update`,
        newData
      )
      setMessage(response.data.message)
      setTimeout(() => {
        navigate('/barang')
      }, 2000)
    } catch (error) {
      console.error('Error:', error)
      setMessage('Failed to update barang')
    }
  }

  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto">
        <h3 className="font-bold text-lg">Update Barang</h3>
        <div className="py-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              name="nama"
              value={dataBarang.nama}
              placeholder="Nama Barang Baru"
              className="input input-bordered w-full my-3"
              onChange={handleChange}
            />
            <input
              type="number"
              required
              name="stok"
              value={dataBarang.stok}
              placeholder="Jumlah Stok Barang"
              className="input input-bordered w-full my-3"
              onChange={handleChange}
            />
            <input
              type="number"
              required
              name="jumlah_terjual"
              value={dataBarang.jumlah_terjual}
              placeholder="Jumlah Barang Terjual"
              className="input input-bordered w-full my-3"
              onChange={handleChange}
            />
            <input
              type="date"
              required
              name="tanggal_transaksi"
              value={dataBarang.tanggal_transaksi}
              placeholder="Tanggal Transaksi"
              className="input input-bordered w-full my-3"
              onChange={handleChange}
            />
            <select
              name="jenis_barang_id"
              value={dataBarang.jenis_barang_id}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                -- Pilih Jenis Barang --
              </option>
              {allJenis.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.jenis}
                </option>
              ))}
            </select>
            <div className="flex justify-center">
              <p>{message}</p>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="mt-3 btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
