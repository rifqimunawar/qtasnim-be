import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { urlMaster } from '../api'

export default function UpdateJenisPage() {
  const { id } = useParams()
  const [dataJenis, setDataJenis] = useState({
    jenis: '',
  })

  const navigate = useNavigate()
  useEffect(() => {
    async function fetchDataJenis() {
      try {
        const response = await axios.get(`${urlMaster}/api/jenis/${id}`)
        setDataJenis(response.data.jenisBarang)
      } catch (error) {
        console.error('error', error)
      }
    }
    fetchDataJenis()
  }, [id])

  const handleChange = (e) => {
    const value = e.target.value
    setDataJenis({
      ...dataJenis,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataJenisBarang = {
      _method: 'PUT',
      jenis: dataJenis.jenis,
    }
    const response = await axios.post(
      `${urlMaster}/api/jenis/${id}/update`,
      dataJenisBarang
    )
    setDataJenis({ jenis: '' })
    console.log(response)
    navigate('/jenis')
  }

  console.log(dataJenis.jenis)
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h3 className="font-bold text-lg">Update Jenis Barang</h3>
        {dataJenis.jenis}
        <div className="flex justify-center text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="jenis"
              value={dataJenis.jenis}
              onChange={handleChange}
              placeholder="Jenis Barang"
              className="input input-bordered w-full max-w-xs"
            />
            <br />
            <br />
            <button type="submit" className="mt-3 btn btn-primary text-center">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

UpdateJenisPage.propTypes = {
  onJenisUpdate: PropTypes.func.isRequired,
}
