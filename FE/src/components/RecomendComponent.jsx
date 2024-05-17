import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getBarang, getJenisBarang } from '../api'
import PropTypes from 'prop-types'

function RecomendComponent({ idJenis }) {
  const [barangRecom, setBarangRecom] = useState([])
  const [allJenis, setAllJenis] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')
  const [filteredBarang, setFilteredBarang] = useState([])

  useEffect(() => {
    async function fetchBarangRecomennd() {
      try {
        const response = await getBarang()
        const jenisResponse = await getJenisBarang()
        const filteredData = response.filter(
          (barang) => barang.jenis_barang_id === parseInt(idJenis)
        )
        setBarangRecom(filteredData)
        setFilteredBarang(filteredData)
        setAllJenis(jenisResponse)
      } catch (error) {
        console.error('err', error)
      }
    }
    fetchBarangRecomennd()
  }, [idJenis])

  const sortData = (order) => {
    const sortedData = [...filteredBarang].sort((a, b) => {
      if (order === 'asc') {
        return a.jumlah_terjual - b.jumlah_terjual
      } else {
        return b.jumlah_terjual - a.jumlah_terjual
      }
    })
    setFilteredBarang(sortedData)
    setSortOrder(order)
  }

  const handleSortbyTrans = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    sortData(newOrder)
  }

  // ========== filter by total penjualan
  const [range, setRange] = useState(100)

  useEffect(() => {
    const filterRange = barangRecom.filter(
      (barang) => barang.jumlah_terjual <= range
    )
    setFilteredBarang(filterRange)
  }, [range, barangRecom]) // Tambahkan barangRecom sebagai dependency

  const handleChange = (e) => {
    const rangeValue = parseInt(e.target.value)
    setRange(rangeValue)
  }

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h1 className="text-xl font-semibold">
            Rekomendasi dari jenis barang yang sama
          </h1>

          <button
            className="btn btn-primary btn-sm"
            onClick={handleSortbyTrans}
          >
            Short by Transaksi{' '}
            {sortOrder === 'asc' ? (
              <i className="bi bi-sort-numeric-down"></i>
            ) : (
              <i className="bi bi-sort-numeric-up"></i>
            )}
          </button>
          {/* =============== filter by total penjualan */}
          <div>
            <input
              type="range"
              min={0}
              max="100"
              value={range}
              className="range range-xs"
              step="5"
              onChange={handleChange}
            />

            <p className="text-sm my-2">{range}</p>
          </div>

          <div>
            {filteredBarang.map((barang) => {
              const jenis = allJenis.find(
                (jenis) => jenis.id === barang.jenis_barang_id
              )
              return (
                <Link to={'/'} key={barang.id}>
                  <div className="flex justify-between bg-sky-300 rounded-lg p-3 my-3">
                    <div className="">
                      <p className="font-semibold">{barang.nama}</p>
                      <p className="text-sm">
                        jenis {jenis ? jenis.jenis : 'Jenis Tidak Ditemukan'}
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <p className="font-light">
                        Terjual: {barang.jumlah_terjual} Buah
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// Menambahkan prop-types untuk validasi props
RecomendComponent.propTypes = {
  idJenis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default RecomendComponent
