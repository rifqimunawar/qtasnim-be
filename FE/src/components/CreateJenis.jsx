import axios from 'axios'
import { useState } from 'react'
import { postJenisBarang } from '../api'
import PropTypes from 'prop-types'

export default function CreateJenis({ onJenisAdded }) {
  CreateJenis.propTypes = {
    onJenisAdded: PropTypes.func.isRequired,
  }

  const [dataJenis, setDataJenis] = useState({
    jenis: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setDataJenis({
      ...dataJenis,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataJenisBarang = {
      jenis: dataJenis.jenis,
    }
    axios
      .post(postJenisBarang, dataJenisBarang)
      .then((response) => {
        setMessage(response.data.result)
        setDataJenis({ jenis: '' })
        onJenisAdded()
      })
      .catch((error) => {
        console.error('Error:', error)
        setMessage('Failed to create jenis barang')
      })
  }

  return (
    <div>
      <button
        className="btn btn-primary btn-sm my-5"
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Tambah Jenis Barang
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Tambah Jenis Barang</h3>
          <div className="flex justify-center text-center modal-action">
            <form onSubmit={handleSubmit} method="dialog">
              <input
                type="text"
                name="jenis"
                value={dataJenis.jenis}
                onChange={handleChange}
                placeholder="Jenis Barang"
                className="input input-bordered w-full max-w-xs"
              />
              <br />
              <p>{message}</p>

              <br />
              <button
                type="submit"
                className="mt-3 btn btn-primary text-center"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
