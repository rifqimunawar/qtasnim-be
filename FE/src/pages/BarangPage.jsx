import { useEffect, useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { getBarang, getJenisBarang } from '../api'
import { Link } from 'react-router-dom'
import CreateBarang from '../components/CreateBarang'
import axios from 'axios'
import { urlMaster } from '../api'

export default function BarangPage() {
  const [dataBarang, setDataBarang] = useState([])
  const [messageDelete, setMessageDelete] = useState('')
  const [allJenis, setAllJenis] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchJenisBarang()
    fetchBarang()
  }, [])

  const fetchBarang = async () => {
    try {
      const data = await getBarang()
      setDataBarang(data)
    } catch (error) {
      console.error('Error fetching data barang from API', error)
    }
  }

  const fetchJenisBarang = async () => {
    try {
      const response = await getJenisBarang()
      setAllJenis(response)
    } catch (error) {
      console.error('Error fetching jenis barang from API', error)
    }
  }

  const handleBarangAdded = () => {
    fetchBarang() // Refresh data
  }

  const deleteBarang = async (id) => {
    try {
      const response = await axios.delete(`${urlMaster}/api/barang/${id}`)
      setMessageDelete(response.data.message)
      handleBarangAdded()
      setTimeout(() => {
        setMessageDelete('')
      }, 3000)
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }

  const sortData = (order) => {
    const sortedData = [...dataBarang].sort((a, b) => {
      if (order === 'asc') {
        return a.nama.localeCompare(b.nama)
      } else {
        return b.nama.localeCompare(a.nama)
      }
    })
    setDataBarang(sortedData)
    setSortOrder(order)
  }

  const handleSortClick = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    sortData(newOrder)
  }

  const sortDatabyTransaksi = (order) => {
    const sortedData = [...dataBarang].sort((a, b) => {
      if (order === 'asc') {
        return a.tanggal_transaksi.localeCompare(b.tanggal_transaksi)
      } else {
        return b.tanggal_transaksi.localeCompare(a.tanggal_transaksi)
      }
    })
    setDataBarang(sortedData)
    setSortOrder(order)
  }

  const handleSortbyTransaksiClick = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    sortDatabyTransaksi(newOrder)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredData = dataBarang.filter((barang) =>
    barang.nama.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto">
        <div className="text-center mb-7">
          <h1 className="text-lg font-semibold">List Data Barang</h1>
        </div>
        <div className="form-control md:w-auto flex">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="input input-bordered w-1/2"
          />
        </div>

        <CreateBarang onBarangAdded={handleBarangAdded} />
        {messageDelete && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 inline-block mr-2"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{messageDelete}</span>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th
                  onClick={handleSortClick}
                  style={{ cursor: 'pointer' }}
                  className="bg-sky-200"
                >
                  Nama
                  {sortOrder === 'asc' ? (
                    <i className="bi bi-sort-alpha-down"></i>
                  ) : (
                    <i className="bi bi-sort-alpha-up"></i>
                  )}
                </th>

                <th>Stok Barang</th>
                <th>Jumlah Terjual</th>
                <th
                  onClick={handleSortbyTransaksiClick}
                  style={{ cursor: 'pointer' }}
                  className="bg-sky-200"
                >
                  Tanggal Transaksi
                  {sortOrder === 'asc' ? (
                    <i className="bi bi-sort-numeric-down"></i>
                  ) : (
                    <i className="bi bi-sort-numeric-up"></i>
                  )}
                </th>
                <th>Jenis Barang</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((barang, index) => {
                const jenis = allJenis.find(
                  (jenis) => jenis.id === Number(barang.jenis_barang_id)
                )
                return (
                  <tr key={barang.id}>
                    <th>{index + 1}</th>
                    <td>{barang.nama}</td>
                    <td>{barang.stok}</td>
                    <td>{barang.jumlah_terjual}</td>
                    <td>{barang.tanggal_transaksi}</td>
                    <td>{jenis ? jenis.jenis : '...'}</td>
                    <td>
                      <div className="text-center">
                        <Link
                          to={`/barang/${barang.id}`}
                          className="btn btn-success btn-sm mr-3"
                        >
                          Lihat
                        </Link>
                        <Link
                          to={`/barang/${barang.id}/update`}
                          className="btn btn-warning btn-sm mr-3"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteBarang(barang.id)}
                          className="btn btn-secondary btn-sm ml-2"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
