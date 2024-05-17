import { useEffect, useState } from 'react'
import { getJenisBarang } from '../api'
import NavbarComponent from '../components/NavbarComponent'
import CreateJenis from '../components/CreateJenis'
import axios from 'axios'
import { urlMaster } from '../api'
import { Link } from 'react-router-dom'

export default function JenisPage() {
  const [jenisBarang, setJenisBarang] = useState([])
  const [messageDelete, setMessageDelete] = useState('')
  const [errorMessageDelete, setErrorMessageDelete] = useState('')

  useEffect(() => {
    fetchJenisBarang()
  }, [])

  async function fetchJenisBarang() {
    try {
      const response = await getJenisBarang()
      setJenisBarang(response)
    } catch (error) {
      console.error('error fetch data from api', error)
    }
  }

  const handleJenisAdded = () => {
    fetchJenisBarang() // Refresh data
  }

  const deleteJenis = async (id) => {
    try {
      const response = await axios.delete(`${urlMaster}/api/jenis/${id}`)
      setMessageDelete(response.data.message)
      setJenisBarang(jenisBarang.filter((jenis) => jenis.id !== id))
      setTimeout(() => {
        setMessageDelete('')
      }, 3000)
    } catch (error) {
      console.error('Error deleting data:', error)
      setErrorMessageDelete(
        'Cannot delete jenis barang because it has associated barangs'
      )
      setTimeout(() => {
        setErrorMessageDelete('')
      }, 3000)
    }
  }

  return (
    <div>
      <NavbarComponent />
      <div className="container mx-auto">
        <div className="text-center mb-7">
          <h1 className="text-lg font-semibold">List Data Jenis Barang</h1>
        </div>
        <CreateJenis onJenisAdded={handleJenisAdded} />
        <div>
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
          {errorMessageDelete && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{errorMessageDelete}</span>
            </div>
          )}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {jenisBarang.map((jenis, index) => (
                  <tr key={jenis.id}>
                    <th>{index + 1}</th>
                    <td>{jenis.jenis}</td>
                    <td>
                      <div className="flex justify-center items-center text-center">
                        <Link
                          to={`/jenis/${jenis.id}/update`}
                          className="btn btn-warning btn-sm"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => deleteJenis(jenis.id)}
                          className="btn btn-secondary btn-sm ml-2"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
