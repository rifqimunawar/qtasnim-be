import axios from 'axios'
import { useEffect, useState } from 'react'
import { getJenisBarang, postBarang } from '../api'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function CreateBarang({ onBarangAdded }) {
  const [dataBarang, setDataBarang] = useState({
    nama: '',
    stok: '',
    jumlah_terjual: '',
    tanggal_transaksi: '',
    jenis_barang_id: '',
  })

  const [allJenis, setAllJenis] = useState([])
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  CreateBarang.propTypes = {
    onBarangAdded: PropTypes.func.isRequired,
  }
  useEffect(() => {
    async function fetchDataJenisBarang() {
      try {
        const response = await getJenisBarang()
        setAllJenis(response)
      } catch (error) {
        console.error('error', error)
      }
    }
    fetchDataJenisBarang()
  }, [])

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
      nama: dataBarang.nama,
      stok: dataBarang.stok,
      jumlah_terjual: dataBarang.jumlah_terjual,
      tanggal_transaksi: dataBarang.tanggal_transaksi,
      jenis_barang_id: dataBarang.jenis_barang_id,
    }
    try {
      const response = await axios.post(postBarang, newData)
      setMessage(response.data.result)
      onBarangAdded()
      setDataBarang({
        nama: '',
        stok: '',
        jumlah_terjual: '',
        tanggal_transaksi: '',
        jenis_barang_id: '',
      })
      navigate('/barang')
    } catch (error) {
      console.error('Error:', error)
      setMessage('Failed to create new barang')
    }
  }

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-primary btn-sm my-5"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Tambah Barang
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box  w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Tambah Barang Baru</h3>
          <div className="py-4">
            <form onSubmit={handleSubmit}>
              <p className="mt-3 ml-3">Nama Barang</p>
              <input
                type="text"
                required
                name="nama"
                value={dataBarang.nama}
                placeholder="Nama Barang Baru"
                className="input input-bordered w-full my-2"
                onChange={handleChange}
              />
              <p className="mt-3 ml-3">Jumlah Stok Barang</p>
              <input
                type="number"
                required
                name="stok"
                value={dataBarang.stok}
                placeholder="Jumlah Stok Barang"
                className="input input-bordered w-full my-2"
                onChange={handleChange}
              />
              <p className="mt-3 ml-3">Jumlah Terjual</p>
              <input
                type="number"
                required
                name="jumlah_terjual"
                value={dataBarang.jumlah_terjual}
                placeholder="Jumlah Barang Terjual"
                className="input input-bordered w-full my-2"
                onChange={handleChange}
              />
              <p className="mt-3 ml-3">Tanggal Transaksi</p>
              <input
                type="date"
                required
                name="tanggal_transaksi"
                value={dataBarang.tanggal_transaksi}
                placeholder="Jumlah Barang Terjual"
                className="input input-bordered w-full my-2"
                onChange={handleChange}
              />
              <p className="mt-3 ml-3">Jenis Barang</p>
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
                <br />
                <p>{message}</p>
                <br />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="mt-3 btn btn-primary">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
