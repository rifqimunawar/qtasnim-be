// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import { urlMaster } from '../api'

// const UpdateJenis = ({ onJenisUpdate, id }) => {
//   const [dataJenis, setDataJenis] = useState({ jenis: '', _method: 'PUT' })
//   const [message, setMessage] = useState('')

//   // Fetch data jenis based on id
//   useEffect(() => {
//     async function fetchShowJenis() {
//       try {
//         const response = await axios.get(`${urlMaster}/api/jenis/${id}`)
//         setDataJenis(response.data.jenisBarang) // Assuming response structure
//         console.log(response.data.jenisBarang)
//       } catch (error) {
//         console.error('Error fetching jenis:', error)
//       }
//     }
//     fetchShowJenis()
//   }, [id])

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setDataJenis({
//       ...dataJenis,
//       [name]: value,
//     })
//   }

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post(
//         `${urlMaster}/api/jenis/${id}`,
//         dataJenis
//       )
//       setMessage(response.data.result) // Assuming API returns a 'result' field
//       onJenisUpdate() // Call callback to refresh data in parent component
//     } catch (error) {
//       console.error('Error updating jenis:', error)
//       setMessage('Failed to update jenis barang')
//     }
//   }

//   return (
//     <div>
//       <button
//         className="btn btn-warning btn-sm"
//         onClick={() => document.getElementById('modalUpdateJenis').showModal()}
//       >
//         Edit
//       </button>
//       <dialog id="modalUpdateJenis" className="modal">
//         <div className="modal-box ">
//           <form method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           <h3 className="font-bold text-lg">Update Jenis Barang</h3>
//           <div className="flex justify-center text-center modal-action">
//             <form onSubmit={handleSubmit} method="dialog">
//               <input
//                 type="text"
//                 name="jenis"
//                 value={dataJenis.jenis}
//                 onChange={handleChange}
//                 placeholder="Jenis Barang"
//                 className="input input-bordered w-full max-w-xs"
//               />
//               <br />
//               <p>{message}</p>

//               <br />
//               <button
//                 type="submit"
//                 className="mt-3 btn btn-primary text-center"
//               >
//                 Update
//               </button>
//             </form>
//           </div>
//         </div>
//       </dialog>
//     </div>
//   )
// }

// // Deklarasi prop types
// UpdateJenis.propTypes = {
//   onJenisUpdate: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
// }

// export default UpdateJenis
